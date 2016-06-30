 // Local (client-only) collection
import { Mongo } from 'meteor/mongo';
import { Bert } from 'meteor/themeteorchef:bert';

export const Errors = new Mongo.Collection(null);

throwError = function(message, type) {
  var type = type || 'default';
  Bert.alert(message, type);
};
