Meteor.publish('podcasts', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Podcasts.find({}, options);
});

Meteor.publish('podcast', function (epNum) {
  check(epNum, String);
  return Podcasts.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('latestPodcast', function () {
  return Podcasts.find({}, { sort: {episodeNumber: -1}, limit: 1 });
});

Meteor.publish('playlist', function (epNum) {
  check(epNum, String);
  return Playlists.find({ episodeNumber: Number(epNum) });
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({ postId: postId });
});

Meteor.publish('commentsIndex', function () {
  return Comments.find({sort: {submitted: -1, _id: -1}, limit: 0});
});

Meteor.publish('notifications', function () {
  return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('posts', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function (slug) {
  check(slug, String);
  return Posts.find({ slug: slug });
});

Meteor.publish('tags', function () {
  return Podcasts.find({}, {fields: {tags: 1}});
});

Meteor.publish('album', function (slug) {
  check(slug, String);
  return Photos.find({ title: slug });
})

Meteor.publish('chats', function(docId, dateNow) {
  check(docId, Match.Any);
  check(dateNow, Date);

  if (!docId)
    docId = ChatOptions.defaultDocId;

  var query = { chatDoc: docId };

  if (dateNow)
    query.chatDate = { $gte: dateNow };

  return Chats.find(query,{
    sort: {
      chatDate: 1
    },
    limit: 50
  });
});

Meteor.publish('parties', function () {
  return Parties.find();
});

Meteor.publish('party', function (slug) {
  check(slug, String);
  return Parties.find({ slug: slug });
});