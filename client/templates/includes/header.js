Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('latestPodcast');
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
    var mp3Url = $(event.target).attr('href');
    var player = Session.get('player');
    if (! player) {
      player = new Howl({
        src: [mp3Url]
      });
      Session.set('player', 'with butts');
    }
    player.play();
  },
  'click .nav-item': function (event) {
    $('.nav-item').removeClass('active');
    $(event.currentTarget).addClass('active'); 
  }
});
