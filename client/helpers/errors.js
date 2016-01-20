 // Local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function(message, type) { 
  var type = type || 'default';
  Bert.alert(message, type);
};

