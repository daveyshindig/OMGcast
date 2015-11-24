Meteor.publish('podcasts', function (args) {
  check(args, Object);
  return Podcasts.find({}, args);
});

Meteor.publish('podcast', function (epNum) {
  check(epNum, String);
  return Podcasts.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('playlist', function (epNum) {
  check(epNum, String);
  return Playlists.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({ postId: postId });
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});
