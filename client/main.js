Meteor.subscribe('podcasts');

Meteor.startup(function() {
  var audio = new Howl({
    buffer: true,
    urls: [audioPath]
  });  
  Session.set('audioObject', audio);
});

// Tracker.autorun(function () {
//   var audioPath = Session.get('audioPath');
//   var audio = Session.get('audioObject')
//   audio.urls = [audioPath];
//   audio.play();
// });