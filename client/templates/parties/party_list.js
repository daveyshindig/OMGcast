Template.partyList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('parties');
  });
});

Template.partyList.onRendered(function () {
  var $parties = $('.parties');

  $parties.imagesLoaded(function() {
    $parties.masonry({
      itemSelector: '.party',
      transitionDuration: 0,
      isResizeBound: true
    });
  });
  Session.set('documentTitle', '808party');
});

Template.partyList.helpers({
  newPartyUrl: () => FlowRouter.path('partyCreate'),
  parties: function () {
    return Parties.find();
  }
});