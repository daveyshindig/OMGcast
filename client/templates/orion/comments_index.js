ReactiveTemplates.onCreated('collections.comments.index', function() {
  this.subscribe('podcasts', {sort: {episodeNumber: -1, _id: -1}, limit: 0});
});