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
    event.preventDefault();
    var mp3Url = $(event.currentTarget).data('path');
    var nowLoaded = Session.get('nowLoaded');

    if (nowLoaded != mp3Url) {
      player.setSrc(mp3Url);
      Session.set('nowLoaded', mp3Url);
    }

    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }
});