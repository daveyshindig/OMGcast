Template.newsItem.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var slug = FlowRouter.getParam('slug');
    self.subscribe('singlePost', slug);
  })
});

Template.newsItem.helpers({
  post: function () {
    return Posts.findOne();
  }
});
