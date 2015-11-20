Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    self.subscribe('podcast', epNum);
    self.subscribe('playlist', epNum);
    self.subscribe('comments', epNum);
  })
});

Template.podcastPage.helpers({
  podcast: function() {
    return Podcasts.findOne();
  },
  playlist: function() {
    return Playlists.findOne();
  },
  comments: function() {
    return Playlists.find();
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