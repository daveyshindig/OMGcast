//electric boogaloo
if (!Accounts.findUserByUsername('davey')) {
  var now = new Date().getTime();

  daveyId = Accounts.createUser({
    profile: {
      name: 'Davey Shindig'
    },
    username: 'davey',
    emails: [
      { address: 'davey@example.com', verified: true }
    ],
    password: '123456',
  });

  Roles.addUserToRoles( daveyId ,  ['admin'] );
};

if (Podcasts.find().count() === 0) {
  var davey = Accounts.findUserByUsername( 'davey' );
  // missing mixes
  var a = [40, 49, 62, 63, 68, 78, 80, 99];

  for (var i = 1; i <= 108; i++ ) {
    if (a.indexOf(i) > -1) {
      continue;
    }

    var davey = Accounts.findUserByUsername( 'davey' );
    var v;

    if (i < 10) {
      v = '00' + i.toString();
    } else if (i < 100) {
      v = '0' + i.toString();
    } else {
      v = i.toString();
    }

    var postId = Podcasts.insert({
      title: '808 Mixtapes — v. ' + v,
      mp3: '/audio/808-mixtapes-v' + v + '.mp3',
      episodeNumber: v,
      host: '?',
      coverImage: '/img/coverart/808-mixtapes-v' + v + '.jpg',
      imageCredit: '',
      userId: davey._id,
      commentCount: 0,
      tags: []
    });

    Playlists.insert({
      episodeNumber: i,
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
      }, {
        title: 'title4',
        artist: 'artist4',
        remix: 'remix4',
        featuring: 'featuring4',
        album: 'album4',
        label: 'label4'
      }, {
        title: 'title5',
        artist: 'artist5',
        remix: 'remix5',
        featuring: 'featuring5',
        album: 'album5',
        label: 'label5'
      }, {
        title: 'title6',
        artist: 'artist6',
        remix: 'remix6',
        featuring: 'featuring6',
        album: 'album6',
        label: 'label6'
      }, {
        title: 'title7',
        artist: 'artist7',
        remix: 'remix7',
        featuring: 'featuring7',
        album: 'album7',
        label: 'label7'
      }, {
        title: 'title8',
        artist: 'artist8',
        remix: 'remix8',
        featuring: 'featuring8',
        album: 'album8',
        label: 'label8'
      }, {
        title: 'title9',
        artist: 'artist9',
        remix: 'remix9',
        featuring: 'featuring9',
        album: 'album9',
        label: 'label9'
      }, {
        title: 'title10',
        artist: 'artist10',
        remix: 'remix10',
        featuring: 'featuring10',
        album: 'album10',
        label: 'label10'
      }, {
        title: 'title11',
        artist: 'artist11',
        remix: 'remix11',
        featuring: 'featuring11',
        album: 'album11',
        label: 'label11'
      }, {
        title: 'title12',
        artist: 'artist12',
        remix: 'remix12',
        featuring: 'featuring12',
        album: 'album12',
        label: 'label12'
      }, {
        title: 'title13',
        artist: 'artist13',
        remix: 'remix13',
        featuring: 'featuring13',
        album: 'album13',
        label: 'label13'
      }, {
        title: 'title14',
        artist: 'artist14',
        remix: 'remix14',
        featuring: 'featuring14',
        album: 'album14',
        label: 'label14'
      }, {
        title: 'title15',
        artist: 'artist15',
        remix: 'remix15',
        featuring: 'featuring15',
        album: 'album15',
        label: 'label15'
      }, {
        title: 'title16',
        artist: 'artist16',
        remix: 'remix16',
        featuring: 'featuring16',
        album: 'album16',
        label: 'label16'
      }, {
        title: 'title17',
        artist: 'artist17',
        remix: 'remix17',
        featuring: 'featuring17',
        album: 'album17',
        label: 'label17'
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
  }
}

if (Parties.find().count() === 0) {
  var davey = Accounts.findUserByUsername( 'davey' );

  // OrionFiles.insert({
  //   _id : '7QMJycqBipCXvYzH4',
  //   url : 'https://s3-us-west-2.amazonaws.com/omgcast/orionjs/ac1deb33-2e7e-41fd-ace7-fe21e3a7e118.jpg',
  //   meta : { 's3Path' : '/orionjs/ac1deb33-2e7e-41fd-ace7-fe21e3a7e118.jpg' },
  //   name : 'superbowl.jpg',
  //    uploader : 'image-attribute'
  // });

  // OrionFiles.insert({
  //   _id : 'pzeRPyRSpHofuTuqj',
  //   url : 'hhttps://s3-us-west-2.amazonaws.com/omgcast/orionjs/7e9a3d39-39d3-47ef-91b0-8be4dda0b30c.jpg',
  //   meta : { 's3Path' : '/orionjs/7e9a3d39-39d3-47ef-91b0-8be4dda0b30c.jpg' },
  //   name : 'club_underground.jpg',
  //    uploader : 'image-attribute'
  // });

  // OrionFiles.insert({
  //   _id : 'aqNbp2Yq5o6QRBfr4',
  //   url : 'https://s3-us-west-2.amazonaws.com/omgcast/orionjs/b9ed6036-1cef-4071-b10c-035861872888.jpg',
  //   meta : { 's3Path' : '/orionjs/b9ed6036-1cef-4071-b10c-035861872888.jpg' },
  //   name : 'club_underground_1_yr_anniversary.jpg',
  //    uploader : 'image-attribute'
  // });

  Parties.insert({
    title : '808 mixtapes',
    startTime : Date('2016-02-07T22:00:00Z'),
    endTime : Date('2016-02-08T04:00:00Z'),
    location : 'Davey\'s House',
    flyerFront : {
      fileId : '7QMJycqBipCXvYzH4',
      url : 'http://www2.hawaii.edu/~dwilkie/808flyer.jpg',
      info : {
        width : 500,
        height : 500,
        backgroundColor : '#0e0e0b',
        primaryColor : '#fcfcfa',
        secondaryColor : '#807d78'
      }
    },
    submitted : Date('2016-01-20T00:00:00Z'),
    userId : davey._id,
    author : davey.profile.name,
    commentCount : 0,
    upvoteCount : 1,
    upvoters: ['davey'],
    tags : [ 'sports', 'house party' ],
    isPinned : true,
    friendlySlugs : {
      slug : {
        base : 'superb-owl-sunday',
        index : 0
      }
    },
    slug : '808-mixtapes'
  });

  Parties.insert({
    title : 'Club Underground',
    startTime : Date('2016-02-06T07:00:00Z'),
    endTime : Date('2016-02-06T12:00:00Z'),
    location : 'The Downbeat Lounge',
    flyerFront : {
      fileId : 'pzeRPyRSpHofuTuqj',
      url : 'http://www2.hawaii.edu/~dwilkie/ff2.jpg',
      info : {
        width : 791,
        height : 791,
        backgroundColor : '#050205',
        primaryColor : '#bd4c17',
        secondaryColor : '#e79d36'
      }
    },
    flyerBack : {
      fileId : 'aqNbp2Yq5o6QRBfr4',
      url : 'http://www2.hawaii.edu/~dwilkie/cattop1.jpg',
      info : {
        width : 1280,
        height : 960,
        backgroundColor : '#7cc8bd',
        primaryColor : '#0b1513',
        secondaryColor : '#802118'
      }
    },
    submitted : Date('2016-01-20T00:00:00Z'),
    userId : davey._id,
    author : davey.profile.name,
    commentCount : 0, 'upvoteCount' : 0,
    tags : [ 'rock' ],
    isPinned : true,
    friendlySlugs : {
      slug : {
        base : 'club-underground', 'index' : 0
      }
    },
    slug : 'club-underground'
  });
}
