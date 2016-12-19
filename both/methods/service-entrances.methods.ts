import { Meteor } from 'meteor/meteor';
import { ServiceEntrances } from '../collections/service-entrances.collection'
import { ServiceEntrance } from '../models/service-entrance.model'

Meteor.methods({
  'service_entrance.upsert': (se: ServiceEntrance, place_id: string) => {
    ServiceEntrances.collection.update(
      { place_ids: [place_id], created_by: Meteor.userId() },
      { $setOnInsert: {
          created_at: new Date()
        },
        $set: {
          updated_at: new Date(),
          'location.lat': se.location.lat,
          'location.lng': se.location.lng,
          'note': se.note,
        }
      },
      { upsert: true }
    );
  }
});