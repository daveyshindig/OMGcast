Podcasts = new orion.collection('podcasts', {
  singularName: 'podcast',
  pluralName: 'podcasts',
  tabular: {
    columns: [
      {
        data: 'coverImage',
        title: 'Cover Image',
        render: function (val, type, doc) {
          var coverImageUrl = val;
          return "<img src=" + coverImageUrl + ">";
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

Meteor.methods({
  playAudio: function (mp3Url) {
    check(mp3Url, String);
    var sound = Session.get('sound');
    if (!sound) {
      sound = new Howl({
        buffer: true,
        urls: [mp3Url]
      });
      Session.set('sound', sound);
      sound.play();
    }
    else {
      sound.urls = [mp3Url];
      sound.play;
    }
  }
})