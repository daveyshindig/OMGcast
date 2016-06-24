// On Client and Server
PodcastsIndex = new EasySearch.Index({
  collection: Podcasts,
  fields: ['title', 'tags', 'host', 'episodeNumber'],
  engine: new EasySearch.MongoDB({
    sort: function () {
      return { episodeNumber: -1};
    }
  })
});

ReviewsIndex = new EasySearch.Index({
	collection: Reviews,
	fields: ['artist', 'releaseName'],
	engine: new EasySearch.MongoDB({
		sort: function() {
			return {submitted: -1};
		}
	})
});

PostsIndex = new EasySearch.Index({
	collection: Posts,
	fields: ['title', 'tags'],
	engine: new EasySearch.MongoDB({
		sort: function() {
			return {submitted: -1};
		}
	})
});
