Comments = new orion.collection('comments', {
  singularName: 'comment',
  pluralName: 'comments',
  link: {
    title: 'Comments'
  },
  tabular: {
    columns: [
      {
        data: 'postId',
        title: 'Post ID',
      }, {
        data: 'author',
        title: 'Author'
      }, {
        data: 'body',
        title: 'Comment',
        tmpl: Meteor.isClient && Template.commentsIndexBlurbCell
      },
      orion.attributeColumn('createdAt', 'submitted', 'Timestamp')
    ]
  }
});

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      postId: String,
      body: String
    });
    var user = Meteor.user();
    var podcast = Podcasts.findOne(commentAttributes.postId);
    var post = null;

    if (!podcast)
      post = Posts.findOne(commentAttributes.postId);

    if (!podcast & !post)
      throw new Meteor.Error('invalid-comment', 'You must comment on a podcast or post');

    var comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post or podcast with the number of comments
    if (podcast) {
      Podcasts.update(comment.postId, {$inc: {commentCount: 1}});
    } else if (post) {
      Posts.update(comment.postId, {$inc: {commentCount: 1}});
    }
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    createCommentNotification(comment);
    return comment._id;
  }
});
