Meteor.publish('podcasts', function () {
  return Podcasts.find();
});

Meteor.publish('podcast', function (num) {
  return Podcasts.find({ episodeNumber: num });
});

Meteor.publish('playlists', function () {
  return Playlists.find();
});

Meteor.publish('playlist', function (podcastId) {
  return Playlists.find({ podcastId: podcastId });
});
