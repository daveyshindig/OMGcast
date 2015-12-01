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
    coverImage: '/img/coverart/808-mixtapes-vol-107.jpg',
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

  Podcasts.insert({
    title: '808 Mixtapes — v. 95',
    mp3: '/audio/ff.mp3',
    episodeNumber: '95',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-95.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 96',
    mp3: '/audio/ff.mp3',
    episodeNumber: '96',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-96.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 97',
    mp3: '/audio/ff.mp3',
    episodeNumber: '97',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-97.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 098',
    mp3: '/audio/ff.mp3',
    episodeNumber: '098',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-098.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 100',
    mp3: '/audio/ff.mp3',
    episodeNumber: '100',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-100.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 101',
    mp3: '/audio/ff.mp3',
    episodeNumber: '101',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-101.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 102',
    mp3: '/audio/ff.mp3',
    episodeNumber: '102',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-102.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 103',
    mp3: '/audio/SexyTerrorist.mp3',
    episodeNumber: '103',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-103.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 104',
    mp3: '/audio/BirdMachine.mp3',
    episodeNumber: '104',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-104.jpg',
    userId: davey._id,
    commentCount: 0
    });

  Podcasts.insert({
    title: '808 Mixtapes — v. 105',
    mp3: '/audio/Beginning.mp3',
    episodeNumber: '105',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-105.jpg',
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

  Posts.insert({
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000), 
    title: 'Wonderful News!',
    body: 'Wonderful news! It\'s so great. Etc etc blah blah',
    slug: 'wonderful-news'
  });

  Posts.insert({
    userId: davey._id,
    author: davey.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000), 
    title: 'Add\'l Good News',
    body: 'More news! It\'s also great. Etc etc blah blah',
    slug: 'addl-good-news'
  });
};
