Playlists.attachSchema(new SimpleSchema({
  podcastId: orion.attribute('hasOne', {
    label: 'Podcast'
  }, {
    collection: Podcasts,
    titleField: 'title',
    publicationName: 'playlistPodcastId'
  }),
  // podcastId: {
  //   type: String,
  //   optional: false,
  //   autoform: {
  //     type: 'hidden',
  //     label: false
  //   }
  // },
  tracks: {
    type: [Object],
    minCount: 1
  },
  'tracks.$.title': {
    type: String,
    optional: false,
    label: 'Title *'
  },
  'tracks.$.artist': {
    type: String,
    optional: false,
    label: 'Artist *'
  },
  'tracks.$.remix': {
    type: String,
    label: 'Remix'
  },
  'tracks.$.featuring': {
    type: String,
    label: 'Featuring'
  },
  'tracks.$.album': {
    type: String,
    label: 'Album'
  },
  'tracks.$.label': {
    type: String,
    label: 'Label'
  }
}));