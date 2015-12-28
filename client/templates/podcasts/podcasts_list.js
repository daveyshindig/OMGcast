Template.podcastsList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('tags');
  });
});

Template.podcastsList.onRendered(function () {
  var $podcasts = $('.podcasts');
  var $infoBox = $('.info-box');

  $podcasts.imagesLoaded(function() {
    $podcasts.masonry({
      itemSelector: '.podcast',
      transitionDuration: 200,
      stamp: '.info-box'
    });
  });
  Session.set('documentTitle', '808MiX');
});

Template.podcastsList.helpers({
  podcastsIndex: () => PodcastsIndex, // instanceof EasySearch.Index
  isSearching: () => Session.get('isSearching'),
  tagsOpen: () => Session.get('hashesOpen'),
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

Template.podcastsList.events({
  'click .dig__tag-btn': () => {
    Session.set('hashesOpen', !Session.get('hashesOpen'));
  },
  'click .dig__more-tags': () => {
    Session.set('numTags', Session.get('numTags') + 10);
  },
  'click .dig__tag': event => {
    var hash = $(event.target).text().substring(1);
    var $input = $('.dig__text-box input');

    $input.val(hash);
    $input.keyup();
    $('.info-box').hide();
  },
  'keypress .dig__text-box input': () => {
    $('.info-box').hide();
  }
});
