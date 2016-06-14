Template.podcastsList.onRendered(function () {
  var $podcasts = $('.podcasts');

  $podcasts.masonry({
    itemSelector: '.podcast',
    transitionDuration: 0,
    isResizeBound: true,
    columnWidth: '.podcast__sizer'
  });
  
  Session.set('documentTitle', '808mix');
});

Template.podcastsList.helpers({
  podcastsIndex: () => PodcastsIndex // instanceof EasySearch.Index
});