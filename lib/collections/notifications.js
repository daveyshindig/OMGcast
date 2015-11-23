Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) 
        && fieldNames.length === 1 
        && fieldNames[0] === 'read';
  }
});

createCommentNotification = function(comment) { 
  var podcast = Podcasts.findOne(comment.podcastId);
  if (comment.userId !== podcast.userId) {
    Notifications.insert({
      userId: podcast.userId,
      podcastId: podcast._id,
      commentId: comment._id, 
      commenterName: comment.author, 
      read: false
    }); 
  }
};