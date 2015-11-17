Podcasts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    optional: false,
    label: 'Episode Title'
  },
  episodeNumber: {
    type: Number,
    optional: false,
    label: "Episode #"
  },
  host: {
    type: String,
    label: 'Host (or DJ)'
  },
  mp3: {
    type: String,
    optional: false,
    label: 'MP3 URL'
  },
  playlistId: orion.attribute('hasOne', {
    label: 'Playlist'
  }, {
    collection: Playlists,
    titleField: 'podcastId',
    publicationName: 'podcastPlaylistId'
  }),
  coverImage: {
    type: String,
    label: 'Cover Image'
  }
}))