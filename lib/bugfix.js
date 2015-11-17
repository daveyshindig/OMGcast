// Workaround for compatibility issue betw. orion & meteor-accounts-bootstrap-3
if (Meteor.isServer) {
  Accounts._options.forbidClientAccountCreation = false;
}
