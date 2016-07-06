import './header.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { Podcasts } from '../../../api/podcasts/podcasts_collection.js';
import { PodcastsIndex } from '../../../api/podcasts/podcast_index.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

Template.header.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('latestPodcast', function() {
      var latest = Podcasts.findOne({}, { sort: {episodeNumber: -1} });
      $('#audio-player').attr('src', latest.mp3);
    });
  });
});

Template.header.onRendered(function () {
  var $searchInput = $('.nav__search input');

  $('#audio-player').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause', 'progress'],
    audioVolume: 'horizontal',
    audioWidth: 200,
    audioHeight: 20,
    iPadUseNativeControls: false,
    iPhoneUseNativeControls: false,
    AndroidUseNativeControls: false,
    success: function (mediaElement, domObject) {
      mediaElement.addEventListener('play', function(e) {
        Session.set('paused', false);
      }, false);
      mediaElement.addEventListener('pause', function(e) {
        Session.set('paused', true);
      }, false);
      // Display what's playing if user clicks the player without loading
      // another song first.
      $('.mejs-playpause-button').click(function () {
        if (Session.equals('defaultLoaded', true)) {
          var latest = Podcasts.findOne({}, { sort: {episodeNumber: -1} });
          var message = 'Now playing ' + latest.title + ', mixed by '
                                                   + latest.host + '.';

          Session.set('defaultLoaded', false);
          Session.set('nowLoaded', latest.mp3);
          Bert.alert(message, 'default', 'growl-top-right', 'fa-music');
        }
      });
      player = mediaElement; // make it available for other functions
    },
    error: function () {
      console.log("Encountered an error while initializing the media element.")
    }
  });
  var mp3 = $('#audio-player').attr('src');

  Session.set('nowLoaded', mp3);
  $searchInput.attr('placeholder', 'Search...');
  $searchInput.focusin(function () {
    $searchInput.attr('placeholder', 'Search DJ, genre, etc.');
  });
  $searchInput.focusout(function () {
    $searchInput.attr('placeholder', 'Search...');
  });
});

Template.header.helpers({
  newsPage: () => FlowRouter.path('news'),
  partyPage: () => FlowRouter.path('party'),
	reviewsPage: () => FlowRouter.path('reviewsPage'),
  latest: () => Podcasts.findOne(),
  podcastsIndex: () => PodcastsIndex, // instanceof EasySearch.Index
  nowPlaying: () => Session.get('nowPlaying')
});

Template.header.events({
  'click .glyphicon-search': function (event) {
    $('.nav__search input').focus();
  },
  'click .glyphicon-tag': function (event) {
    $('.tags').toggleClass('hidden');
  }
});
