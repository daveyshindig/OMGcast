Template.podcastItem.helpers({
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  podcastPage: function(episodeNumber) {
    var epNum = { podcastId: episodeNumber };
    return FlowRouter.path('podcastPage', epNum);
  },
  playButton: function(episodeNumber) {
    if (Session.get('nowPlaying') == episodeNumber) {
      return '/img/pause.png';
    } else {
      return '/img/play.png';
    }
  },
  pauseAudio: function(episodeNumber) {
    console.log('pausing audio');
  }
});

Template.podcastItem.events({
  'mouseenter .podcast': function (event) {
    $(event.currentTarget).find('.podcast__overlay').removeClass('hidden');
  },
  'mouseleave .podcast': function (event) {
    $(event.currentTarget).find('.podcast__overlay').addClass('hidden');
  },
  'click .podcast__view-btn, click .podcast__overlay h3 a': function (event) {
    preventDefault();
    var path = $(event).text();
    FlowRouter.go( path );
  },
  'click .podcast__play-btn': function (event) {
    var episodeNumber = $(event.currentTarget).data('episodenumber');
    if (Session.get('nowPlaying') == episodeNumber) {
      Session.set('nowPlaying', false);
    } else {
      Session.set('nowPlaying', episodeNumber);
    }
  }
});