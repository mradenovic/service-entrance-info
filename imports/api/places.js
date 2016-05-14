import { Mongo } from 'meteor/mongo';

export const Places = new Mongo.Collection('places');

Meteor.methods({
  'places.insert' (place) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
/*
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
*/

    Places.insert(place); //Place object {_id: place_id}
  },
});
