Template.partyItem.helpers({
  upvoted: upvoters => {
    let username = Meteor.user().username;
    let a = upvoters || [];
    let i = a.indexOf(username);
		let r = '';

    if (i >= 0) {
      r = 'upvoted';
    };

		return r;
  }
});

Template.partyItem.onRendered(function() {
	$('.party').imagesLoaded(function() {
		$('.parties').masonry('reloadItems')
									.masonry('layout');
	});
});

Template.partyItem.events({
  'click .party-upvotes__arrow': (event, template) => {
    let user = Meteor.userId();

    if (user === null) {
      Bert.alert('Please log in (or register) to upvote.', 'info');
    }
    else {
      Meteor.call('upvoteParty', template.data._id);
    }
  }
});
