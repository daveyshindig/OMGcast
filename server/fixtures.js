if (Podcasts.find().count() === 0) {
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
};

if (Playlists.find().count() === 0) {
  Playlists.insert({
        artist: 'artist',
        title: 'title',
        album: 'album',
        label: 'label'
  });
  Playlists.insert({
        artist: 'artist2',
        title: 'title2',
        album: 'album2',
        label: 'label2'
  });
  Playlists.insert({
        artist: 'artist3',
        title: 'title3',
        album: 'album3',
        label: 'label3'
  });
}
