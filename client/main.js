// Global audio player because it causes stack overflow when wrapped into a
// session variable.
player = null;

window.addEventListener('resize', function() {
  $('.podcasts').masonry('reload');
});

Session.set('isSearching', false);