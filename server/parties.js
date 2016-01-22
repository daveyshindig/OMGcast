Meteor.methods({
	upvoteParty: function(partyId) {
		check(partyId, String);

    var p = Parties.findOne({_id: partyId});
    var u = Meteor.user();

    if (!p) {
      throw new Meteor.Error(100003, 'Party not found during upvote operation.');
      return;
    }

    if (p.upvoters.indexOf(u.username) >= 0) {
      Parties.update({_id: partyId}, {$inc: {upvoteCount: -1},
                                  $pull: {upvoters: u.username}});
    } else {
      Parties.update({_id: partyId}, {$inc: {upvoteCount: 1},
                                  $addToSet: {upvoters: u.username}});
    }
	}
});