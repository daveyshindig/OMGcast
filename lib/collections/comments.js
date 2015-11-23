Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String); 
    check(commentAttributes, {
      podcastId: String,
      body: String
    });
    var user = Meteor.user();
    var podcast = Podcasts.findOne(commentAttributes.podcastId);

    if (!podcast)
      throw new Meteor.Error('invalid-comment', 'You must comment on a podcast or post');

    var comment = _.extend(commentAttributes, { 
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    Podcasts.update(comment.podcastId, {$inc: {commentCount: 1}});
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    createCommentNotification(comment);
    return Comments.insert(comment); 
  }
});

