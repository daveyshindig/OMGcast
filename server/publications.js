Meteor.publish('podcasts', function () {
  return Podcasts.find();
});

Meteor.publish('podcast', function (num) {
  return Podcasts.find({ episodeNumber: num });
});

Meteor.publish('playlist', function (podcastId) {
  return Podcasts.find({ podcastId: podcastId});
});