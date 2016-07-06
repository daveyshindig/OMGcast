import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { orion } from 'meteor/orionjs:core';
import { Template } from 'meteor/templating';
import { CommentsSchema } from '../comments/comments_schema.js';
import { Parties } from '../parties/parties_collection.js';
import { Podcasts } from '../podcasts/podcasts_collection.js';
import { createCommentNotification } from '../notifications/notifications_collection.js';
import { check } from 'meteor/check'

export const Comments = new orion.collection('comments', {
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
      body: String,
      type: String
    });
    var user = Meteor.user();
    var comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post or podcast with the number of comments
    if (commentAttributes.type === "podcastPage") {
      Podcasts.update(comment.postId, {$inc: {commentCount: 1}});
    } else if (commentAttributes.type === "newsItem") {
      Posts.update(comment.postId, {$inc: {commentCount: 1}});
    } else if (commentAttributes.type === "partyPage") {
      Parties.update(comment.postId, {$inc: {commentCount: 1}});
    }
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    createCommentNotification(comment);
    return comment._id;
  }
});

Comments.attachSchema(CommentsSchema);
