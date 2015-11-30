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
      console.log(podcast._id);
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
    // event.preventDefault();
    // var mp3Url = $(event.currentTarget).attr('href');
    // console.dir('mp3Url: ' + mp3Url);
    // var sound = Session.get('sound');
    // if (!sound) {
    //   sound = new Howl({
    //     buffer: true,
    //     src: [mp3Url]
    //   });
    //   Session.set('sound', sound);
    // }
    // else {
    //   sound.src = [mp3Url];
    // }
    // sound.play();
  }
});