Parties = new orion.collection('parties', {
  singularName: 'party',
  pluralName: 'parties',
  tabular: {
    columns: [
      {
        data: 'flyerFront',
        title: 'Title',
        render: function (val, type, doc) {
          console.log(val);
          return "<img src=" + val.url + ">";
        }
      }, {
        data: 'title',
        title: 'Title'
      }, {
        data: 'startTime',
        title: 'Start Time'
      }, {
        data: 'location',
        title: 'Location'
      }
    ]
  }
});
