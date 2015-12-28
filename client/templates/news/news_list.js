Template.newsList.onCreated(function () {
  var self = this;

  Session.set('chat-docid', '808mix');
  Session.set('chat-historysince', new Date(0));
  self.autorun(function() {
    var limit = FlowRouter.getParam('limit') || 8;
    self.subscribe('posts', {sort: {submitted: -1}, limit: limit});
    self.subscribe('chats', Session.get('chat-docid'),
                             Session.get('chat-historysince'));
  });
});

Template.newsList.onRendered(function () {
  Session.set('documentTitle', '808NEWS');
});

Template.newsList.helpers({
  posts: function () {
    return Posts.find();
  },
  newsItemPath: function (slug) {
    var params = { slug: slug };

    return FlowRouter.path('news/:slug', params);
  }
});
