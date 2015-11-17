Meteor.subscribe('podcasts');
Meteor.subscribe('playlists');

Meteor.startup(function() {
  var audio = new Howl({
    buffer: true,
    urls: [] // @TODO: Setup a newest episode URL
  });
  Session.set('audioObject', audio);
});

// Tracker.autorun(function () {
//   var audioPath = Session.get('audioPath');
//   var audio = Session.get('audioObject')
//   audio.urls = [audioPath];
//   audio.play();
// });