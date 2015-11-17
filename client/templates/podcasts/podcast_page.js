Template.podcastPage.onCreated(function () {
  // var self = this;
  // self.autorun(function() {
  // });
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

Template.podcastPage.events({
  'click .podcast-page__play-btn': function (event) {
    event.preventDefault();
    var mp3Url = $(event.currentTarget).attr('href');
    console.dir(mp3Url)
    Meteor.call('playAudio', mp3Url, function (error, result) {
      if (error)
        return alert(error.reason);
    });
  }
});