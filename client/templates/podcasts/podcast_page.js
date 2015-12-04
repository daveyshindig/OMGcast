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
  isPlaying: function(mp3) {
    var isPlaying = Session.get('nowLoaded') == mp3 && !Session.get('paused');
    return isPlaying;
  }
});

Template.podcastPage.events({
  'click .podcast-page__play-btn': function (event) {
    event.preventDefault();
    var mp3Url = $(event.currentTarget).data('path');
    var nowLoaded = Session.get('nowLoaded');

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