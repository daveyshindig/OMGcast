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
      mediaElement.addEventListener('play', function(e) {
        Session.set('paused', false);
      }, false);
      mediaElement.addEventListener('pause', function(e) {
        Session.set('paused', true);
      }, false);
      player = mediaElement; // make it available for other functions
    },
    error: function () {
      console.log("Encountered an error while initializing the media element.")
    }
  });
  var mp3 = $('#audio-player').attr('src');
  Session.set('nowLoaded', mp3);
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
    var nowLoaded = Session.get('nowLoaded');
    Session.set('nowLoaded', mp3Url);
  },
  'click .nav-item': function (event) {
    $('.nav-item').removeClass('active');
    $(event.currentTarget).addClass('active');
  }
});
