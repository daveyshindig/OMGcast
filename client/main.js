// Global audio player because it causes stack overflow when wrapped into a
// session variable.
player = null;

Session.set('hashesOpen', false);
Session.set('isSearching', false);
Session.set('numTags', 10);
Session.set('documentTitle', '808MIX');
Session.set('defaultLoaded', true);