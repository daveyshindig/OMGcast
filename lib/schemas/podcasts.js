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
  coverImage: {
    type: String,
    label: 'Cover Image'
  },
  userId: {
    type: String,
    label: 'User ID'
  },
  commentCount: {
    type: Number,
    label: 'Comment Count',
    defaultValue: 0
  }
}));