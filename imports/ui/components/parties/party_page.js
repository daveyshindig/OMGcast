import './party_page.html'
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import { Parties } from '../../../api/parties/parties_collection.js';
import { Comments } from '../../../api/comments/comments_collection.js';
import '../comments/comment_submit.js';
import '../comments/comment_item.js';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.partyPage.onCreated(function () {
  var self = this;

  self.autorun(function () {
    var slug = FlowRouter.getParam('slug');

    self.subscribe('singleParty', slug, {
      onReady: function () {
        var post = Parties.findOne();
        self.subscribe('comments', post._id);
      }
    });
  });
});

Template.partyPage.onCreated(function () {
  Session.set('documentTitle', '808party');
});

Template.partyPage.helpers({
  party: function () {
    return Parties.findOne();
  },
  ownParty: function () {
    if (Meteor.userId() && Parties.findOne().userId == Meteor.userId())
      return true;
  },
  comments: function () {
    return Comments.find();
  },
  time: function (t) {
    var fmt = "HH:mm, DD MMM YYYY"
    return moment(t).format(fmt);
  },
  slug: function () {
    return FlowRouter.getParam('slug');
  },
	upvoted: function(upvoters) {
		var username = Meteor.user().username;
    var a = upvoters || [];
    var i = a.indexOf(username);
		var r = '';

    if (i >= 0) {
      r = 'upvoted';
    };

		return r;
	},
	upvoters: function() {
		return Parties.findOne({slug: FlowRouter.getParam('slug')}).upvoters;
	}
});

Template.partyPage.events({
  'click .party-info__heart': (event, template) => {
    let user = Meteor.userId();

    if (user === null) {
      Bert.alert('Please log in (or register) to upvote.', 'info');
    }
    else {
      Meteor.call('upvoteParty', Parties.findOne()._id);
    }
  }
});

