Template.podcastItem.onCreated(function () {
  var self = this;
  self.autorun(function() {
    self.subscribe('playlist', String(self.data.episodeNumber));
  });
});

// Template.podcastItem.onRendered(function () {
//   $('.podcast').imagesLoaded(function() {
//     $('.podcasts').masonry('appended', $('.podcast').last());
//   });
// });

// Template.podcastItem.onDestroyed(function () {
//   $('.podcasts').masonry('reloadItems').masonry('layout');
// });

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
    var details = $(event.currentTarget).closest('.podcast__details');

    Session.set('defaultLoaded', false);
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
  'click .podcast__cover-img, click .podcast__overlay': function (event) {
    var $thisPodcast = $(event.target).closest('.podcast');
    var $details = $thisPodcast.find('.podcast__details');
    var $controls = $thisPodcast.find('.podcast__controls');

    $('.podcast').not($thisPodcast).removeClass('podcast_dbl-wide');
    $('.podcast__details').not($details).addClass('hidden');
    $('.podcast__controls').not($controls).removeClass('podcast__controls_move-up');
    $thisPodcast.toggleClass('podcast_dbl-wide');
    $details.toggleClass('hidden');
    $controls.toggleClass('podcast__controls_move-up');
    $('.podcasts').masonry('reloadItems')
                  .masonry('layout');
  },
  'click .podcast__tag': function (event) {
    var $str = $(event.target).text().slice(1);
    var $input = $('.nav__search input');

    $input.val($str);
    $input.keyup();
    $('.info-box').hide();
  }
});

