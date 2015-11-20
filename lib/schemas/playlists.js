Playlists.attachSchema(new SimpleSchema({
  episodeNumber: {
    type: Number,
    label: 'Episode Number',
    optional: false
  },
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