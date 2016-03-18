Template.partyCreate.onRendered(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('parties');
  });
});

AutoForm.hooks('partyForm', {
  onSuccess: function () {
    FlowRouter.go('/party/' + this.docId);
  }
});