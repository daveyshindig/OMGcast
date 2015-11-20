Meteor.publish('podcasts', function () {
  return Podcasts.find();
});

Meteor.publish('podcast', function (epNum) {
  check(epNum, String);
  return Podcasts.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('playlists', function () {
  return Playlists.find();
});

Meteor.publish('playlist', function (epNum) {
  check(epNum, String);
  return Playlists.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('comments', function(epNum) { 
  check(epNum, String);
  return Comments.find({ episodeNumber: Number(epNum) });
});
