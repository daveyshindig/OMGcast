Template.podcastItem.helpers({
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  podcastUrl: function(episodeNumber) {
    var epNum = { episodeNumber: episodeNumber };
    return FlowRouter.path('podcastUrl', epNum);
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
    
    if (player === null) {
      player = new Howl({
        src: [mp3Url]
      });
    }

    if (nowPlaying != mp3Url) {
      player.unload();
      player = new Howl({
        src: [mp3Url]
      });
    }

    player.playing() ? player.pause() : player.play();
    Session.set('nowPlaying', mp3Url);
  }
});