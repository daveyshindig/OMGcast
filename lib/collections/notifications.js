Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc)
        && fieldNames.length === 1
        && fieldNames[0] === 'read';
  }
});

createCommentNotification = function(comment) {
  Notifications.insert({
    userId: comment.userId,
    postId: comment.postId,
    commentId: comment._id,
    commenterName: comment.author,
    read: false
  });
};
 