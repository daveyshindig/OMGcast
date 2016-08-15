//electric boogaloo
import { Podcasts } from '/imports/api/podcasts/podcasts_collection.js';
import { Playlists } from '/imports/api/playlists/playlists_collection.js';
import { Parties } from '/imports/api/parties/parties_collection.js';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/nicolaslopezj:roles';

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
    password: '123456'
  });

  Roles.addUserToRoles( daveyId,  ['admin'] );

  nickiId = Accounts.createUser({
    profile: {
      name: 'Nicki Ralar'
    },
    username: 'badlimbs',
    emails: [
      { address: 'nickiralar@gmail.com', verified: true }
    ],
    password: '654321'
  });

  Roles.addUserToRoles( nickiId,  ['admin'] );
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
      title: '808 Mixtapes v.' + v,
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
      }]
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
      url : 'https://www2.hawaii.edu/~dwilkie/808flyer.jpg',
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
      url : 'https://www2.hawaii.edu/~dwilkie/ff2.jpg',
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
      url : 'https://www2.hawaii.edu/~dwilkie/cattop1.jpg',
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
