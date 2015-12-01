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
  mp3Url: function (episodeNumber) {
    var epNum = { episodeNumber: episodeNumber };
    var podcast = Podcasts.findOne(epNum);
    return podcast.mp3;
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
    event.preventDefault();
    var mp3Url = $(event.currentTarget).data('path');
    var nowPlaying = Session.get('nowPlaying');

    if (nowPlaying != mp3Url) {
      player.setSrc(mp3Url);
      Session.set('nowPlaying', mp3Url);
    }

    if (player.paused) {
      player.play();
      $('.podcast__play-btn').attr('src', '/img/play.png');
      $(event.currentTarget).attr('src', '/img/pause.png');
    } else {
      player.pause();
      $(event.currentTarget).attr('src', '/img/play.png');
    }
  }
});