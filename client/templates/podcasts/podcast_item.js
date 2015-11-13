Template.podcastItem.events({
  'mouseenter .podcast-content': function (event) {
    $(event.currentTarget).find('.podcast-overlay').removeClass('hidden');
  },
  'mouseleave .podcast-content': function (event) {
    $(event.currentTarget).find('.podcast-overlay').addClass('hidden');
  }
});

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
  playButton: function() {
    if (Session.get('isPlaying')) {
      return '/img/pause.png';
    } else {
      return '/img/play.png';
    }
  }
});

Template.podcastItem.events({
  'click .podcast-overlay h3 a': function (event) {
    preventDefault();
    var path = $(event).text();
    FlowRouter.go( path );
  }
});