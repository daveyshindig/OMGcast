import './party_create.html';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.partyCreate.onRendered(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('parties');
  });
});

SimpleSchema.debug = true;
