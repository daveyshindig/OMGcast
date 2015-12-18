Template.newsList.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var limit = FlowRouter.getParam('limit') || 8;
    self.subscribe('posts', {sort: {submitted: -1}, limit: limit});
  })
});

Template.newsList.onRendered(function () {
  Session.set('documentTitle', '808NEWS');
});

Template.newsList.helpers({
  posts: function () {
    return Posts.find();
  }
});
