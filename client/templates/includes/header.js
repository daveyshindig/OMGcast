Template.header.events({
  'click .nav-item': function (event) {
    $('.nav-item').removeClass('active');
    $(event.currentTarget).addClass('active'); 
  }
})