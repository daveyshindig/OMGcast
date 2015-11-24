Template.podcastPage.onCreated(function () {
  var self = this;
  // self.autorun(function () {
  //   self.subscribe('latestPodcast');
  // });
});

Template.header.helpers({
  // latestMp3: function () {
  //   var latest = Podcasts.findOne();
  //   return latest.mp3;
  // }
}); 

Template.header.events({
  'click .nav__play-button': function (event) {
    preventDefault(event);
    Meteor.call('playPodcast', mp3Url, function (error, result) {
      if (error)
        return alert(error.reason);
    });
  },
  'click .nav-item': function (event) {
    $('.nav-item').removeClass('active');
    $(event.currentTarget).addClass('active'); 
  }
});
