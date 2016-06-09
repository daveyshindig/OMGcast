Template.podcastPage.onCreated(function () {
  var self = this;

  self.autorun(function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    self.subscribe('podcast', epNum);
    self.subscribe('playlist', epNum, {
      onReady: function () {
        var podcast = Podcasts.findOne();
        self.subscribe('comments', podcast._id);
      }
    });
  });
});

Template.podcastPage.onRendered(function () {
  Session.set('documentTitle', '808mix - v.' +
              FlowRouter.getParam('episodeNumber'));
});

Template.podcastPage.helpers({
  podcast: function() {
    var epNum = FlowRouter.getParam('episodeNumber');

    return Podcasts.findOne({ episodeNumber: Number(epNum) });
  },
  playlist: function() {
    var epNum = FlowRouter.getParam('episodeNumber');

    return Playlists.findOne({ episodeNumber: Number(epNum) });
  },
  comments: function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    var p = Podcasts.findOne({ episodeNumber: Number(epNum) });

    return Comments.find({ postId: p._id });
  },
  isPlaying: function(mp3) {
    var isPlaying = Session.get('nowLoaded') == mp3 && !Session.get('paused');

    return isPlaying;
  }
});

Template.podcastPage.events({
  'click .podcast-page__play-btn': function (event) {
    event.preventDefault();
    var mp3Url = Podcasts.findOne().mp3.url;
    var nowLoaded = Session.get('nowLoaded');

    Session.set('defaultLoaded', false);
    if (nowLoaded != mp3Url) {
      player.setSrc(mp3Url);
      Session.set('nowLoaded', mp3Url);
    }

    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }
});