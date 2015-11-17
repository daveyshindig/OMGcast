Playlists = new orion.collection('playlists', {
  singularName: 'playlist',
  pluralName: 'playlists',
  tabular: {
    columns: [
      {
        data: 'podcastId',
        title: 'Cover Image',
        render: function (val, type, doc) {
          var podcastId = val;
          var coverImage = Podcasts.findOne(podcastId).coverImage;
          return "<img src=" + coverImage + ">";
        }
      }, {
        data: 'podcastId',
        title: 'Episode #',
        render: function (val, type, doc) {
          var podcastId = val;
          var episodeNumber = Podcasts.findOne(podcastId).episodeNumber;
          return episodeNumber;
        }
      }
    ]
  }
});

