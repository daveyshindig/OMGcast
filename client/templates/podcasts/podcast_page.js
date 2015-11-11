Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var podcastId = FlowRouter.getParam('podcastId');
    console.log(podcastId);
    self.subscribe('podcast', podcastId);
  });
});

Template.podcastPage.helpers({
  podcast: function() {
    var podcastId = FlowRouter.getParam('podcastId');
    var podcast = Podcasts.findOne({episodeNumber: podcastId}) || {};
    return podcast;
  }
  // comments: function() {
  //   return Comments.find({podcastId: this._id});
});