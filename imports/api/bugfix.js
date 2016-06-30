// Workaround for compatibility issue betw. orion & meteor-accounts-bootstrap-3
import { Accounts } from 'meteor/accounts-base';
if (Meteor.isServer) {
  Accounts._options.forbidClientAccountCreation = false;
}
