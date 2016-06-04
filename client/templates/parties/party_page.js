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

Template.partyPage.helpers({
  party: function () {
    return Parties.findOne();
  },
  comments: function () {
    return Comments.find();
  },
  time: function (t) {
    var fmt = "HH:mm, DD MMM YYYY"
    return moment(t).format(fmt);
  }

});
