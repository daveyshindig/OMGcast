import './podcasts_list.html';
import '../tags/tags.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Podcasts } from '../../../api/podcasts/podcasts_collection.js';
import { PodcastsIndex } from '../../../api/podcasts/podcast_index.js';
import { EasySearch } from 'meteor/easy:search';
import { $ } from 'meteor/jquery';
import './podcast_item.js';
import '../tags/tags.html';

Template.podcastsList.onRendered(function () {
  $('.podcasts').masonry({
  	itemSelector: '.podcast',
  	transitionDuration: 0,
  	isResizeBound: true,
  	columnWidth: '.podcast__sizer'
	});
  Session.set('documentTitle', '808mix');
});

Template.podcastsList.helpers({
  podcastsIndex: () => PodcastsIndex // instanceof EasySearch.Index
});
