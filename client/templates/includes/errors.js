var IGNORE_CONNECTION_ISSUE_KEY = 'ignoreConnectionIssue';

Template.errors.helpers({ 
  errors: function() {
    return Errors.find(); 
  }
});

Template.error.onRendered(function() { 
  var error = this.data; 
  Meteor.setTimeout(function () {
    Errors.remove(error._id);
  }, 6500);
});

Template.errors.helpers({ 
  connected: function() {
    return Session.get(IGNORE_CONNECTION_ISSUE_KEY) ||
      Meteor.status().connected;
  }
});