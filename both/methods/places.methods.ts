import { Meteor } from 'meteor/meteor';
import { Places } from '../collections/places.collection';
import { Place } from '../models/place.model';

Meteor.methods({
  'places.upsert': (place: Place) => {
    Places.collection.update(
      { place_id: place.place_id },
      { $setOnInsert: {
          created_at: new Date()
        },
        $set: {
          formatted_address: place.formatted_address,
          lat: place.lat,
          lng: place.lng
        }
      },
      { upsert: true }
    );
  }
});
