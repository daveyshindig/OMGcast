Photos = new orion.collection('photos', {
  singularName: 'photo',
  pluralName: 'photos',
  tabular: {
    columns: [
      {
        data: 'title',
        title: 'Title'
      }, {
        data: 'title',
        title: 'Title',
        render: function (val, type, doc) {
          return "<img src=" + val + ">";
        }
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