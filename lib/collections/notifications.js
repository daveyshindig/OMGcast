Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc)
        && fieldNames.length === 1
        && fieldNames[0] === 'read';
  }
});

createCommentNotification = function(comment) {
  var podcast = Podcasts.findOne(comment.postId);
  if (podcast && comment.userId !== podcast.userId) {
    Notifications.insert({
      userId: podcast.userId,
      postId: podcast._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  } else {
    var post = Posts.findOne(comment.postId)

    Notifications.insert({
      userId: post.userId,
      postId: post._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};
