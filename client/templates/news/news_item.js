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
