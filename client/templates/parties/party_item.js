Template.partyItem.helpers({
  upvoted: upvoters => {
    var username = Meteor.user().username;
    var a = upvoters || [];
    var i = a.indexOf(username);

    if (i >= 0) {
      return 'upvoted';
    };

    $('.party').imagesLoaded(function() {
      $('.parties').masonry('reloadItems')
                    .masonry('layout');
    });
  }
});

Template.partyItem.events({
  'click .party-upvotes__arrow': (event, template) => {
    var user = Meteor.userId();

    if (user === null) {
      Bert.alert('Please log in (or register) to upvote.', 'info');
    }
    else {
      Meteor.call('upvoteParty', template.data._id);
    }
  }
});