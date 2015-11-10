Meteor.publish('podcasts', function () {
  return Podcasts.find();
});

Meteor.publish('podcast', function (num) {
  check(num, String);
  return Podcasts.find({ episodeNumber: num });
});
