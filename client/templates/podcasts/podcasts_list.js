Template.podcastsList.helpers({
  aboutPage: function () {
    return FlowRouter.path('aboutPage');
  },
  podcastsIndex: () => PodcastsIndex // instanceof EasySearch.Index
});
