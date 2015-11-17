ReactiveTemplates.onCreated('collections.playlists.index', function() {
  this.subscribe('podcasts', {sort: {podcastId: -1, _id: -1}, limit: 0});
});