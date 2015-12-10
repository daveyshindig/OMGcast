Template.podcastsList.helpers({
  podcastsIndex: () => PodcastsIndex, // instanceof EasySearch.Index
  isSearching: () => Session.get('isSearching')
});
