Template.newsList.onCreated(function () {
  var self = this;

  Session.set('chapp-docid', '808mix');
  Session.set('chapp-historysince', new Date(0));
  if (Meteor.user() != null) {
    Session.set('chapp-username', Meteor.user().username);
  }

  self.autorun(function() {
    var limit = FlowRouter.getParam('limit') || 8;
    self.subscribe('posts', {sort: {submitted: -1}, limit: limit});
    self.subscribe('chapps', Session.get('chapp-docid'),
                             Session.get('chapp-historysince'));
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
