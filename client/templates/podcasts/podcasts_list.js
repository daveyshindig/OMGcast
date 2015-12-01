Template.podcastsList.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var limit = FlowRouter.getParam('limit') || 8;
    self.subscribe('podcasts', {sort: {episodeNumber: -1}, limit: limit});
  })
});

Template.podcastsList.helpers({
  podcasts: function () {
    return Podcasts.find();
  },
  aboutPage: function () {
    return FlowRouter.path('aboutPage');
  }
});
