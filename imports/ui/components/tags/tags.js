import './tags.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Podcasts } from '../../../api/podcasts/podcasts_collection.js';
import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';

Template.tags.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('tags');
  });
});

Template.tags.helpers({
  tags: () => {
    var podcasts = Podcasts.find().fetch();
    var tags = [];
    var numTags = Session.get('numTags');

    _.each(podcasts, function(podcast) {
      tags = _.union(tags, podcast.tags);
    });
    return tags.length < numTags ? tags
                                 : _.first(tags, numTags);
  },
  moreTags: () => {
    var podcasts = Podcasts.find().fetch();
    var tags = [];

    _.each(podcasts, function(podcast) {
      tags = _.union(tags, podcast.tags);
    });
    return tags.length > Session.get('numTags');
  }
});

Template.tags.events({
  'click .tags__tag-btn': () => {
    Session.set('hashesOpen', !Session.get('hashesOpen'));
  },
  'click .tags__more-tags': () => {
    Session.set('numTags', Session.get('numTags') + 10);
  },
  'click .tags__tag': event => {
    var $hash = $(event.target).text().substring(1);
    var $input = $('.nav__search input');

    $input.val($hash);
    $input.keyup();
  }
});
