Template.partyList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('parties');
  });
});

Template.partyList.helpers({
  newPartyUrl: () => FlowRouter.path('partyCreate'),
  parties: function () {
    return Parties.find();
  }
});