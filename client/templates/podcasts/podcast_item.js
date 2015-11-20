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
  playButton: function(episodeNumber) {
    return (Session.get('nowPlaying') == episodeNumber) ? '/img/pause.png' : '/img/play.png';
  }
});

Template.podcastItem.events({
  'mouseenter .podcast': function (event) {
    $(event.currentTarget).find('.podcast__overlay').removeClass('hidden');
  },
  'mouseleave .podcast': function (event) {
    $(event.currentTarget).find('.podcast__overlay').addClass('hidden');
  },
  'click .podcast__view-btn, click .podcast__link': function (event) {
    event.preventDefault();
    var path = $(event.currentTarget).attr('href');
    FlowRouter.go(path);
  },
  'click .podcast__play-btn': function (event) {
    var episodeNumber = $(event.currentTarget).data('episodenumber');
    var audioPath = $(event.currentTarget).data('audiopath');
    if (Session.get('nowPlaying') == episodeNumber) {
      Session.set('nowPlaying', false);
      Session.get('audioObject').pause();
    } else {
      Session.set('nowPlaying', episodeNumber);
      Session.set('audioPath', audioPath);
    }
  }
});