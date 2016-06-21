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
  }
});
