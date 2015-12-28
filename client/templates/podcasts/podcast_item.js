Template.podcastItem.onCreated(function () {
  var self = this;
  self.autorun(function() {
    self.subscribe('playlist', String(self.data.episodeNumber));
  });
});

Template.podcastItem.onRendered(function () {
  $('.podcast').imagesLoaded(function() {
    $('.podcasts').masonry('reloadItems')
                  .masonry('layout');
  });
});

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
  },
  playlist: function () {
    return Playlists.findOne();
  }
});

Template.podcastItem.events({
  'mouseenter .podcast': function (event) {
    $(event.currentTarget).find('.podcast__overlay').removeClass('hidden');
  },
  'mouseleave .podcast': function (event) {
    $(event.currentTarget).find('.podcast__overlay').addClass('hidden');
  },
  'click .podcast__link': function (event) {
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
  },
  'click .podcast__view-btn': function (event) {
    var $thisPodcast = $(event.target).closest('.podcast');
    var $details = $(event.target).parents('.podcast__overlay')
                                  .children('.podcast__details');
    var $controls = $(event.target).parent('.podcast__controls');

    $('.podcast').not($thisPodcast).removeClass('podcast_dbl-wide');
    $('.podcast__details').not($details).addClass('hidden');
    $('.podcast__controls').not($controls).removeClass('podcast__controls_move-up');
    $thisPodcast.toggleClass('podcast_dbl-wide');
    $details.toggleClass('hidden');
    $controls.toggleClass('podcast__controls_move-up');
    $('.podcasts').masonry('layout');
  },
  'click .podcast__tag': function (event) {
    var $str = $(event.target).text().slice(1);
    var $input = $('.dig__text-box input');
    if (Session.equals('isSearching', false)) {
      Session.set('isSearching', true);
      $('.dig').removeClass('hidden');
    }

    $input.val($str);
    $input.keyup();
    $('.info-box').hide();
  }
});

