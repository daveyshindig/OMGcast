import { Meteor } from 'meteor/meteor';

Meteor.publish('album', function (slug) {
  check(slug, String);
  return Photos.find({ title: slug });
})
