import { Meteor } from 'meteor/meteor';
import { Places } from '../../../both/collections/places.collection';

Meteor.publish('place', function(place_id: string) {
  return Places.find({place_id: place_id});
});
