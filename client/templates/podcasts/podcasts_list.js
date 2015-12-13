Template.podcastsList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('tags');
  })
})

Template.podcastsList.onRendered(function () {
  var $podcasts = $('.podcasts');
  var $infoBox = $('.info-box');
  $podcasts.imagesLoaded(function() {
    $podcasts.masonry({ 
      itemSelector: '.podcast',
      transitionDuration: 200
    });
  });
  // var searchInstance = EasySearch.getComponentInstance({
  //   id: '',
  //   index: 'podcastsIndex',
  //   autorun: self.autorun
  // });
  // searchInstance.on('searchingDone', function (searchingIsDone) {
  //   if (searchingIsDone) {
  //     console.log('searching done');
  //   }
  // });
});

Template.podcastsList.helpers({
  podcastsIndex: () => PodcastsIndex, // instanceof EasySearch.Index
  isSearching: () => Session.get('isSearching'),
  hashesOpen: () => Session.get('hashesOpen'),
  hashes: () => {
    var podcasts = Podcasts.find().fetch();
    var tags = []; 
    var numTags = Session.get('numTags');

    _.each(podcasts, function(podcast) {
      tags = _.union(tags, podcast.tags);
    });
    return tags.length < numTags ? tags 
                                 : _.first(tags, numTags);
  },
  moreHashes: () => {
    var podcasts = Podcasts.find().fetch();
    var tags = []; 

    _.each(podcasts, function(podcast) {
      tags = _.union(tags, podcast.tags);
    });
    return tags.length > Session.get('numTags');
  }
});

Template.podcastsList.events({
  'click .dig__hash-btn': () => {
    Session.set('hashesOpen', !Session.get('hashesOpen'));
  },
  'click .dig__more-hashes': () => {
    Session.set('numTags', Session.get('numTags') + 10);        
  },
  'click .dig__hash': event => {
    var hash = $(event.target).text().substring(1);
    var $input = $('.dig__text-box input');

    $input.val(hash);
    $input.keyup()  
  }
});