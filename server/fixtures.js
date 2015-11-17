if (Podcasts.find().count() === 0) {
  var daveyId = Accounts.createUser({
      profile: {
        name: 'Davey Shindig'
      },
      username: "davey",
      email: "davey@example.com",
      password: "123456",
    });

  Roles.addUserToRoles( daveyId ,  ["admin"] );

  Podcasts.insert({
    title: '808 Mixtapes — v. 107',
    mp3: 'http://www.808mix.com/808-mixtapes-vol-107.zip/',
    episodeNumber: '107',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-107-super-cw.jpg'
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 94',
    mp3: 'http://www.808mix.com/808-mixtapes-vol-094.zip/',
    episodeNumber: '94',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-94.jpg'
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 19',
    mp3: 'http://www.808mix.com/808-mixtapes-vol-019.zip/',
    episodeNumber: '19',
    host: 'Davey Shindig',
    coverImage: '/img/coverart/808-mixtapes-vol-19.jpg'
    });

  var podcasts = Podcasts.find({}, {fields: {_id: 1}}).fetch();

  Playlists.insert({
    podcastId: podcasts[0]._id,
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
    podcastId: podcasts[1]._id,
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
    podcastId: podcasts[2]._id,
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

};
