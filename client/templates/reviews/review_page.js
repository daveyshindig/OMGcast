Template.reviewPage.onCreated(function() {
	var self = this;

	self.autorun(function(){
		var slug = FlowRouter.getParam('slug');
		self.subscribe('singleReview', slug, {
			onReady: function() {

			}
		});
	});
});

Template.reviewPage.onCreated(function () {
  Session.set('documentTitle', 'Review');
});

Template.reviewPage.helpers({
	review: function() {
		var slug = FlowRouter.getParam('slug');
		return Reviews.findOne({ slug: slug });
	}
});
