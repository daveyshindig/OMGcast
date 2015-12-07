// On Client and Server
PodcastsIndex = new EasySearch.Index({
  collection: Podcasts,
  fields: ['title', 'tags', 'host', 'episodeNumber'],
  engine: new EasySearch.MongoDB()
});
