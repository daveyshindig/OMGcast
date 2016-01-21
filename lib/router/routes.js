FlowRouter.route('/', {
  name: 'home',
  action: function () {
    BlazeLayout.render('layout', {content: 'podcastsList'});
  }
});

FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render('layout', {content: 'notFound'});
  }
}

FlowRouter.route('/podcast/:episodeNumber', {
  name: 'podcastPage',
  action: function () {
    BlazeLayout.render('layout', {content: 'podcastPage'});
  }
});

FlowRouter.route('/news', {
  name: 'news',
  action: function () {
    BlazeLayout.render('layout', {content: 'newsList'});
  }
});

FlowRouter.route('/news/:slug', {
  name: 'newsPage',
  action: function () {
    BlazeLayout.render('layout', {content: 'newsItem'});
  }
});

FlowRouter.route('/shindig', {
  name: 'shindig',
  action: function () {
    BlazeLayout.render('layout', {content: 'shindig'});
  }
});

FlowRouter.route('/party', {
  name: 'party',
  action: function () {
    BlazeLayout.render('layout', {content: 'partyList'});
  }
});

FlowRouter.route('/party/new', {
  name: 'partyCreate',
  action: function () {
    BlazeLayout.render('layout', {content: 'partyCreate'});
  }
});

FlowRouter.route('/party/:slug', {
  name: 'partyPage',
  action: function () {
    BlazeLayout.render('layout', {content: 'partyPage'});
  }
});

// Server-side routes
if (Meteor.isServer) {
  Picker.route('/feed.xml', function( params, req, res, next) {
    var feed = new RSS({
      title: 'New 808 Mixes',
      description: 'The latest mixes from 808 Mixtapes, Honolulu, Hawaii.'
    });
    res.write(feed.xml());
    res.end();
  });
}