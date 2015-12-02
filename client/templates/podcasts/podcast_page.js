Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    self.subscribe('podcast', epNum);
    self.subscribe('playlist', epNum, {
      onReady: function () {
        var epNum = FlowRouter.getParam('episodeNumber');
        var path = Podcasts.findOne({ episodeNumber: Number(epNum) }).mp3;
        var nowPlaying = Session.get('nowPlaying');

        if (player && (path == nowPlaying) && !player.paused) {
          $('.podcast-page__play-btn').attr('src', '/img/pause.png');
        }
      }
    });
    // This findOperation runs twice on page load for unknown reasons.
    var podcast = Podcasts.findOne();
    // It's undefined for one of those loads, which causes meteor to crash.
    // Thus, the conditional.
    if (podcast) {
      self.subscribe('comments', podcast._id);
    }
  })
});

Template.podcastPage.onRendered(function () {
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

    if (nowPlaying != mp3Url) {
      player.setSrc(mp3Url);
      Session.set('nowPlaying', mp3Url);
    }

    if (player.paused) {
      player.play();
      $(event.currentTarget).attr('src', '/img/pause.png');
    } else {
      player.pause();
      $(event.currentTarget).attr('src', '/img/play.png');
    }
  }
});