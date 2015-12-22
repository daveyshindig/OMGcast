Template.album.onCreated(function () {
  var self = this;
  self.autorun(function() {
    FlowRouter.getParam('albumName');
    self.subscribe('album', albumName);
  });
});

Template.album.helpers(function () {
  photos: () => Photos.find().fetch();
});