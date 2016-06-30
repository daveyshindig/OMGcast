import './news_item.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router'; 
import Posts from '../../../api/collections/posts.js';
import Comments from '../../../api/collections/comments.js';

Template.newsItem.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var slug = FlowRouter.getParam('slug');
    self.subscribe('singlePost', slug, {
      onReady: function () {
        var post = Posts.findOne();
        self.subscribe('comments', post._id);
      }
    });
  });
});

Template.newsItem.helpers({
  post: function () {
    return Posts.findOne();
  },
  comments: function () {
    return Comments.find();
  }
});
