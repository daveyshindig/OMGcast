Podcasts = new orion.collection('podcasts', {
  singularName: 'podcast',
  pluralName: 'podcasts',
  tabular: {
    columns: [
      {
        data: 'coverImage',
        title: 'Cover Image',
        render: function (val, type, doc) {
          return "<img src=" + val + ">";
        }
      }, {
        data: 'title',
        title: 'Title'
      }, {
        data: 'host',
        title: 'Host'
      }, {
        data: 'episodeNumber',
        title: 'Episode #'
      }
    ]
  }
});