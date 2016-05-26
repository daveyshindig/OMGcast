Template.partyList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var slug = FlowRouter.getParam('slug');
    Meteor.subscribe('singleParty', slug, {
      onReady: function () {
        var party = Parties.findOne();
        self.subscribe('comments', party._id);
      }
    });
  });
});

Template.partyList.helpers({
  parties: function () {
    return Parties.findOne();
  }
});