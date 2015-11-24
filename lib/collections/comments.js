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
        title: 'Post',
        render: function (val, type, doc) {
          var postTitle = Podcasts.findOne({_id: val}).title;
          return postTitle;
        }
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

    if (!podcast)
      throw new Meteor.Error('invalid-comment', 'You must comment on a podcast or post');

    var comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    Podcasts.update(comment.postId, {$inc: {commentCount: 1}});
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    createCommentNotification(comment);
    return comment._id;
  }
});
