Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    self.subscribe('podcast', epNum);
    self.subscribe('playlist', epNum, {
      onReady: function () {
        var podcast = Podcasts.findOne({ episodeNumber: Number(epNum) });
        console.log(epNum);
        self.subscribe('comments', podcast._id);
      }
    });
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
    return Comments.find();
  },
  buttonImage: function () {
    var epNum = FlowRouter.getParam('episodeNumber');
    var podcast = Podcasts.findOne({ episodeNumber: Number(epNum)});
    var nowPlaying = Session.get(nowPlaying);

    if (player && !player.paused && (podcast.mp3 == nowPlaying)) {
      return '/img/pause.png'
    } else {
      return '/img/play.png'
    }
  }
});

Template.podcastPage.events({
  'click .podcast-page__play-btn': function (event) {
    event.preventDefault();
    var mp3Url = $(event.currentTarget).data('path');
    var nowPlaying = Session.get('nowPlaying');

    if (nowPlaying != mp3Url) {
      player.setSrc(mp3Url);
      Session.set('nowPlaying', mp3Url);
    }

    if (player.paused) {
      player.play();
      // $(event.currentTarget).attr('src', '/img/pause.png');
    } else {
      player.pause();
      // $(event.currentTarget).attr('src', '/img/play.png');
    }
  }
});