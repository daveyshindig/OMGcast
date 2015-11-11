Meteor.publish('podcasts', function () {
  return Podcasts.find();
});

Meteor.publish('podcast', function (num) {
  return Podcasts.find({ episodeNumber: num });
});
