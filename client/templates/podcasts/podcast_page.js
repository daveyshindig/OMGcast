Template.podcastPage.onCreated(function () {
  var self = this;
  self.autorun(function() {
  });
});

Template.podcastPage.helpers({
  podcast: function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    return Podcasts.findOne({episodeNumber: epNum}) || {};
  },
  playlist: function() {
    var epNum = FlowRouter.getParam('episodeNumber');
    var podcast = Podcasts.findOne({episodeNumber: epNum}, {fields: {_id: 1}}) || {};
    return Playlists.findOne({podcastId: podcast._id}) || {};
  }
  // comments: function() {
  //   return Comments.find({podcastId: this._id});
});