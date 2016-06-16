import { Mongo } from 'meteor/mongo';

export const Infos = new Mongo.Collection('infos');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('infos', function publishInfos() {
    return Infos.find();
  });
}

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
  'infos.update' (info) {
    const query = {_id: info._id};
    const update = {$set: info};
    delete update.$set._id;
    Infos.upsert(query, update);
  }
});
