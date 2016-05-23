Template.partyCreate.onRendered(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('parties');
  });
});

SimpleSchema.debug = true;