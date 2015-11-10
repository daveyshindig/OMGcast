Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var podcastId = FlowRouter.getParam('podcastId');
    console.log(podcastId);
    self.subscribe('podcast', podcastId);
  });
})

Template.podcastPage.helpers({
  // comments: function() {
  //   return Comments.find({podcastId: this._id});
});