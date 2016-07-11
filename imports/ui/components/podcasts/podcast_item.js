import './podcast_item.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Podcasts } from '../../../api/podcasts/podcasts_collection.js';
import { Playlists } from '../../../api/playlists/playlists_collection.js';
import { $ } from 'meteor/jquery';

Template.podcastItem.onCreated(function () {
  var self = this;
  self.autorun(function() {
    self.subscribe('playlist', String(self.data.episodeNumber));
  });
});

Template.podcastItem.onRendered(function () {
	var eh = this;
	$('.podcasts').imagesLoaded(function() {
  	$('.podcasts').masonry('appended', eh.find('.podcast'));
 	});
});

Template.podcastItem.onDestroyed(function () {
  $('.podcasts').masonry('remove', this.find('.podcast'))
                .masonry('layout');
});

Template.podcastItem.helpers({
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  podcastPage: function(episodeNumber) {
    var epNum = { episodeNumber: episodeNumber };
    return FlowRouter.path('podcastPage', epNum);
  },
  isPlaying: function(mp3) {
    var isPlaying = Session.get('nowLoaded') == mp3 && !Session.get('paused');
    return isPlaying;
  },
  playlist: function () {
    return Playlists.findOne();
  }
});

Template.podcastItem.events({
  'click .podcast__play-btn': function (event) {
    event.preventDefault();
    var mp3Url = $(event.currentTarget).data('path');
    var nowLoaded = Session.get('nowLoaded');
    var $overlay = $(event.currentTarget).find('.podcast__overlay');

    Session.set('defaultLoaded', false);
    if (nowLoaded != mp3Url) {
      player.setSrc(mp3Url);
      Session.set('nowLoaded', mp3Url);
    }

    if ($overlay.hasClass('hidden')) {
      return;
    }
    else if (player.paused) {
      player.play();
      event.stopImmediatePropagation();
    }
    else if (!player.paused) {
      player.pause();
      event.stopImmediatePropagation();
    }
  },
  'click .podcast__cover-img, click .podcast__overlay': function (event) {
    var $thisPodcast = $(event.target).closest('.podcast');
    var $overlay = $thisPodcast.find('.podcast__overlay');

    $('.podcast__overlay').not($overlay).addClass('hidden');
    $overlay.toggleClass('hidden');
    $('.podcast').not($thisPodcast).removeClass('podcast_dbl-wide');
    $thisPodcast.toggleClass('podcast_dbl-wide');
    $('.podcasts').masonry('reloadItems').masonry('layout');
  },
  'click .podcast__tag': function (event) {
    var $str = $(event.target).text().slice(1);
    var $input = $('.nav__search input');

    $input.val($str);
    $input.keyup();
  }
});
