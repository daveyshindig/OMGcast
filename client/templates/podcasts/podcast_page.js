Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    self.subscribe('podcast', epNum);
    self.subscribe('playlist', epNum);
    // This findOperation runs twice on page load for unknown reasons.
    var podcast = Podcasts.findOne();
    // It's undefined for one of those loads, which causes meteor to crash.
    // Thus, the conditional.
    if (podcast) {
      self.subscribe('comments', podcast._id);
    }
  })
});

Template.podcastPage.helpers({
  podcast: function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    return Podcasts.findOne({ episodeNumber: Number(epNum)});
  },
  playlist: function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    return Playlists.findOne({episodeNumber: Number(epNum)});
  },
  comments: function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    return Comments.find({episodeNumber: Number(epNum)});
  }
});

Template.podcastPage.events({
  'click .podcast-page__play-btn': function (event) {
    event.preventDefault();
    var mp3Url = $(event.currentTarget).data('path');
    var nowPlaying = Session.get('nowPlaying');
    
    if (player === null) {
      player = new Howl({
        src: [mp3Url],
        onEnd: function() {
          $('.nav__play-img').attr('src', '/img/play-top.png');
          $('.podcast-page__play-btn').attr('src', '/img/play.png')
        }
      });
      nowPlaying = mp3Url;
      Session.set('nowPlaying', mp3Url);
    }

    if (player && nowPlaying != mp3Url) {
      player.unload();
      player = new Howl({
        src: [mp3Url],
        onEnd: function() {
          $('.nav__play-img').attr('src', '/img/play-top.png');
          $('.podcast-page__play-btn').attr('src', '/img/play.png')
        }
      });
    }

    if (player.playing()) {
      player.pause();
      $(event.currentTarget).attr('src', '/img/play.png')
      $('.nav__play-img').attr('src', '/img/play-top.png');
    } else {
      player.play();
      Session.set('nowPlaying', mp3Url);
      $('.nav__play-btn').data('link', mp3Url); 
      $('.podcast-page__play-btn').attr('src', '/img/play.png')
      $(event.currentTarget).attr('src', '/img/pause.png')
      $('.nav__play-img').attr('src', '/img/pause-top.png');
    }
  }
});