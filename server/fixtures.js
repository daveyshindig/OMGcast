if (Podcasts.find().count() === 0) {
  Podcasts.insert({
    title: '808 Mixtapes — v. 107',
    mp3: 'http://www.808mix.com/808-mixtapes-vol-107.zip/',
    episodeNumber: '189',
    host: 'Davey Shindig',
    coverImage: 'http://www2.hawaii.edu/~dwilkie/808-mixtapes-vol-107.jpg'
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 94',
    mp3: 'http://www.808mix.com/808-mixtapes-vol-094.zip/',
    episodeNumber: '94',
    host: 'Davey Shindig',
    coverImage: 'http://www2.hawaii.edu/~dwilkie/808-mixtapes-vol-94.jpg'
  });

  Podcasts.insert({
    title: '808 Mixtapes — v. 19',
    mp3: 'http://www.808mix.com/808-mixtapes-vol-019.zip/',
    episodeNumber: '19',
    host: 'Davey Shindig',
    coverImage: 'http://www2.hawaii.edu/~dwilkie/808-mixtapes-vol-19.jpg'
  });
};
