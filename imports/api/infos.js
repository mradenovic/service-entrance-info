import { Mongo } from 'meteor/mongo';

export const Infos = new Mongo.Collection('infos');

Meteor.methods({
  'infos.insert' (info) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
/*
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
*/

    Infos.insert(info); //Info object
  },
});
