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

FlowRouter.route('/about', {
  name: 'about',
  action: function () {
    BlazeLayout.render('layout', {content: 'aboutPage'});
  }
});

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