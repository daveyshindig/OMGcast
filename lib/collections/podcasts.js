Podcasts = new orion.collection('podcasts', {
  singularName: 'podcast',
  pluralName: 'podcasts',
  tabular: {
    columns: [
      {
        data: 'title',
        title: 'Title'
      }, {
        data: 'mp3',
        title: 'MP3'
      }, {
        data: 'episodeNumber',
        title: 'Episode #'
      }, {
        data: 'host',
        title: 'Host'
      }, {
        data: 'coverImage',
        title: 'Cover Image'
      }
    ]
  }
});

Podcasts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    optional: false,
    label: 'Episode Title'
  },
  mp3: {
    type: String,
    optional: false,
    label: 'MP3 URL',
    regEx: SimpleSchema.RegEx.Url
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
  coverImage: {
    type: String,
    label: 'Cover Image',
    regEx: SimpleSchema.RegEx.Url
  }
}))