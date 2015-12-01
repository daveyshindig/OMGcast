Template.header.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('latestPodcast');
  });
});

Template.header.onRendered(function () {
  $('#audio-player').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause', 'progress'],
    audioVolume: 'horizontal',
    audioWidth: 200,
    audioHeight: 20,
    iPadUseNativeControls: true,
    iPhoneUseNativeControls: true,
    AndroidUseNativeControls: true,
    success: function (mediaElement, domObject) {
      player = mediaElement; // make it available for other functions
    },
    error: function () {
      console.log("Encountered an error while initializing the media element.")
    }
  });
});

Template.header.helpers({
  latest: function () {
    return Podcasts.findOne();
  }
});

Template.header.events({
  'click .nav__play-btn': function (event) {
    event.preventDefault();
    var mp3Url = $(event.currentTarget).data('link');
    var nowPlaying = Session.get('nowPlaying');

    // if (player === null) {
    //   player = new Howl({
    //     src: [mp3Url]
    //   });
    // }

    // if (nowPlaying != mp3Url) {
    //   player.unload();
    //   player = new Howl({
    //     src: [mp3Url]
    //   });
    // }

    // if (player.playing()) {
    //   player.pause();
    //   $('.nav__play-img').attr('src', '/img/play-top.png');
    // } else {
    //   player.play();
    //   $('.nav__play-img').attr('src', '/img/pause-top.png');
    // }
    Session.set('nowPlaying', mp3Url);
  },

  'click .nav-item': function (event) {
    $('.nav-item').removeClass('active');
    $(event.currentTarget).addClass('active');
  }
});
