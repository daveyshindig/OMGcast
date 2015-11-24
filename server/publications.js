Meteor.publish('podcasts', function () {
  return Podcasts.find();
});

Meteor.publish('podcastIndex', function () {
  return Podcasts.find({}, {sort: {episodeNumber: -1, _id: -1}, limit: 0});
});

Meteor.publish('podcast', function (epNum) {
  check(epNum, String);
  return Podcasts.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('latestPodcast', function () {
  return Podcasts.findOne({}, {sort: {episodeNumber: -1}});
});

Meteor.publish('playlist', function (epNum) {
  check(epNum, String);
  return Playlists.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({ postId: postId });
});

Meteor.publish('commentsIndex', function() {
  return Comments.find({sort: {submitted: -1, _id: -1}, limit: 0});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});
