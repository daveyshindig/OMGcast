Template.podcastItem.events({
  'mouseenter .podcast-content': function (event) {
    $(event.currentTarget).find('.podcast-overlay').removeClass('hidden');
  },
  'mouseleave .podcast-content': function (event) {
    $(event.currentTarget).find('.podcast-overlay').addClass('hidden');
  }
})

Template.podcastItem.helpers({
})