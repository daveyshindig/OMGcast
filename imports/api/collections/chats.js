import { Mongo } from 'meteor/mongo';
import { orion } from 'meteor/orionjs:core';

export const ChatOptions = {
    defaultUserName: 'Anonymous',
    defaultDocId: 'openchat'
};

export default Chats = new Meteor.Collection("chats");
