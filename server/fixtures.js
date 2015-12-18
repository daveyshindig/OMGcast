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
    host: 'Super CW',
    coverImage: '/img/coverart/808-mixtapes-vol-107.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['house', 'disco', 'electro-pop']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 94',
    mp3: '/audio/ff.mp3',
    episodeNumber: '94',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-94.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['house', 'disco', 'electro-pop']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 19',
    mp3: '/audio/ff.mp3',
    episodeNumber: '19',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-19.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['house', 'disco', 'electro-pop']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 95',
    mp3: '/audio/ff.mp3',
    episodeNumber: '95',
    host: 'Haircuts for Men',
    coverImage: '/img/coverart/808-mixtapes-vol-95.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['wub', 'glitch-hop', 'rap']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 96',
    mp3: '/audio/ff.mp3',
    episodeNumber: '96',
    host: 'Jon Jon',
    coverImage: '/img/coverart/808-mixtapes-vol-96.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['moombahton', 'dub', 'dubstep']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 97',
    mp3: '/audio/ff.mp3',
    episodeNumber: '97',
    host: 'Weaver Beats',
    coverImage: '/img/coverart/808-mixtapes-vol-97.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['wub', 'glitch-hop', 'rap']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 098',
    mp3: '/audio/ff.mp3',
    episodeNumber: '098',
    host: 'The ADHDJ',
    coverImage: '/img/coverart/808-mixtapes-vol-098.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['synth-pop', 'wave']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 100',
    mp3: '/audio/ff.mp3',
    episodeNumber: '100',
    host: 'MEDS',
    coverImage: '/img/coverart/808-mixtapes-vol-100.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['darkwave', 'minimal']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 101',
    mp3: '/audio/ff.mp3',
    episodeNumber: '101',
    host: 'Haircuts for Men',
    coverImage: '/img/coverart/808-mixtapes-vol-101.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['ambient', 'techno', 'dub']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 102',
    mp3: '/audio/ff.mp3',
    episodeNumber: '102',
    host: 'Kowai Kowai',
    coverImage: '/img/coverart/808-mixtapes-vol-102.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['dream-pop', 'chillwave']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 103',
    mp3: '/audio/SexyTerrorist.mp3',
    episodeNumber: '103',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-103.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['dream-pop', 'chillwave']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 104',
    mp3: '/audio/BirdMachine.mp3',
    episodeNumber: '104',
    host: 'Ashan & Partius',
    coverImage: '/img/coverart/808-mixtapes-vol-104.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['ambient', 'chill']
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 105',
    mp3: '/audio/Beginning.mp3',
    episodeNumber: '105',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-105.jpg',
    userId: davey._id,
    commentCount: 0,
    tags: ['techno', 'bass', 'abstrak']
  });


  var podcasts = Podcasts.find().fetch();

  for (var i = 0; i < podcasts.length; i++) {
    Playlists.insert({
      episodeNumber: podcasts[i].episodeNumber,
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
  }

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
