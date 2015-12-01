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
  name: 'aboutPage',
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
  name: 'newsItem',
  action: function () {
    BlazeLayout.render('layout', {content: 'newsPage'});
  }
});

// Router.configure({
//   layoutTemplate: 'layout',
//   loadingTemplate: 'loading',
//   notFoundTemplate: 'notFound',
//   waitOn: function () {
//     return [Meteor.subscribe('notifications')]
//   }
// });

// PodcastsListController = RouteController.extend({
//   template: 'podcastsList',
//   increment: 5,
//   podcastsLimit: function () {
//     return parseInt(this.params.podcastsLimit) || this.increment;
//   },
//   findOptions: function () {
//     return {sort: this.sort, limit: this.podcastsLimit()};
//   },
//   subscriptions: function () {
//     this.podcastsSub = Meteor.subscribe('podcasts', this.findOptions());
//   },
//   podcasts: function () {
//     return Podcasts.find({}, this.findOptions());
//   },
//   data: function () {
//     var self = this;
//     return {
//       podcasts: self.podcasts(),
//       ready: self.podcastsSub.ready,
//       nextPath: function () {
//         if (self.podcasts().count() === self.podcastsLimit())
//           return self.nextPath();
//       }
//     };
//   }
// });

// NewPodcastsController = PodcastsListController.extend({
//   sort: {submitted: -1, _id: -1},
//   nextPath: function () {
//     return Router.routes.newPodcasts.path({podcastsLimit: this.podcastsLimit() + this.increment})
//   }
// });

// Router.route('/', {
//   name: 'home',
//   controller: NewPodcastsController
// });

// Router.route('/new/:podcastsLimit?', {name: 'newPodcasts'});

// Router.route('/podcasts/:_id', {
//   name: 'podcastPage',
//   waitOn: function () {
//     return [
//       Meteor.subscribe('singlePodcast', this.params._id),
//       Meteor.subscribe('comments', this.params._id)
//     ];
//   },
//   data: function () { return Podcasts.findOne(this.params._id); }
// });

// var requireLogin = function () {
//   if (! Meteor.user()) {
//     if (Meteor.loggingIn()) {
//       this.render(this.loadingTemplate);
//     } else {
//       this.render('accessDenied');
//     }
//   } else {
//     this.next();
//   }
// }

// Router.onBeforeAction('dataNotFound', {only: 'podcastPage'});
// Router.onBeforeAction(requireLogin, {only: 'podcastSubmit'});
