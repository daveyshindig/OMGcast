if (!Accounts.findUserByUsername('davey')) {
  var now = new Date().getTime();

  daveyId = Accounts.createUser({
    profile: {
      name: 'Davey Shindig'
    },
    username: "davey",
    email: "davey@example.com",
    password: "123456",
  });

  Roles.addUserToRoles( daveyId ,  ["admin"] );
};

if (Podcasts.find().count() === 0) {
  var davey = Accounts.findUserByUsername( 'davey' );

  var postId = Podcasts.insert({
    title: '808 Mixtapes — v. 107',
    mp3: '/audio/ff.mp3',
    episodeNumber: '107',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-107-super-cw.jpg',
    userId: davey._id,
    commentCount: 0
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 94',
    mp3: '/audio/ff.mp3',
    episodeNumber: '94',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-94.jpg',
    userId: davey._id,
    commentCount: 0
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 19',
    mp3: '/audio/ff.mp3',
    episodeNumber: '19',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-19.jpg',
    userId: davey._id,
    commentCount: 0
    });

  var podcasts = Podcasts.find().fetch();

  Playlists.insert({
    episodeNumber: podcasts[0].episodeNumber,
    tracks: [{
      title: 'title1',
      artist: 'artist1',
      remix: 'remix1',
      featuring: 'featuring1',
      album: 'album1',
      label: 'label1'
    }, {
      title: 'title2',
      artist: 'artist2',
      remix: 'remix2',
      featuring: 'featuring2',
      album: 'album2',
      label: 'label2'
    }, {
      title: 'title3',
      artist: 'artist3',
      remix: 'remix3',
      featuring: 'featuring3',
      album: 'album3',
      label: 'label3'
    }]
  });

  Playlists.insert({
    episodeNumber: podcasts[1].episodeNumber,
    tracks: [{
      title: 'title1',
      artist: 'artist1',
      remix: 'remix1',
      featuring: 'featuring1',
      album: 'album1',
      label: 'label1'
    }, {
      title: 'title2',
      artist: 'artist2',
      remix: 'remix2',
      featuring: 'featuring2',
      album: 'album2',
      label: 'label2'
    }, {
      title: 'title3',
      artist: 'artist3',
      remix: 'remix3',
      featuring: 'featuring3',
      album: 'album3',
      label: 'label3'
    }]
  });

  Playlists.insert({
    episodeNumber: podcasts[2].episodeNumber,
    tracks: [{
      title: 'title1',
      artist: 'artist1',
      remix: 'remix1',
      featuring: 'featuring1',
      album: 'album1',
      label: 'label1'
    }, {
      title: 'title2',
      artist: 'artist2',
      remix: 'remix2',
      featuring: 'featuring2',
      album: 'album2',
      label: 'label2'
    }, {
      title: 'title3',
      artist: 'artist3',
      remix: 'remix3',
      featuring: 'featuring3',
      album: 'album3',
      label: 'label3'
    }]
  });

  Comments.insert({
    postId: postId,
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000), 
    body: 'Nice mix obvz!'
  });

  Comments.insert({
    postId: postId,
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000), 
    body: 'I\'m replying to myself!'
  });
};


