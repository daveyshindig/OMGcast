Template.header.events({
  'click .nav-item': function (event) {
    $('.nav-item').removeClass('active');
    $(event.currentTarget).addClass('active'); 
  }
});

Template.header.helpers({
  'click .nav__play-button': function (mp3Url) {
    preventDefault();
    Meteor.call('playPodcast', mp3Url, function (error, result) {
      if (error)
        return alert(error.reason);
    });
  },
  'click .nav__pause-button': function () {
    
  }
}); 