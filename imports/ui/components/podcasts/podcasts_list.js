import './podcasts_list.html';
import '../tags/tags.js';
import './podcast_item.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Podcasts from '../../../api/collections/podcasts.js';
import { PodcastsIndex } from '../../../api/search/indices.js';
import { EasySearch } from 'meteor/easy:search';
import { $ } from 'meteor/jquery';

Template.podcastsList.onRendered(function () {
  var $podcasts = $('.podcasts');
	$podcasts.imagesLoaded(function() {
  	$podcasts.masonry({
    	itemSelector: '.podcast',
    	transitionDuration: 0,
    	isResizeBound: true,
    	columnWidth: '.podcast__sizer'
  	});
	});

  Session.set('documentTitle', '808mix');
});

Template.podcastsList.helpers({
  podcastsIndex: () => PodcastsIndex // instanceof EasySearch.Index
});
