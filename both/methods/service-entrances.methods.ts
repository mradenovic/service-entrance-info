import { Meteor } from 'meteor/meteor';
import { ServiceEntrances } from '../collections/service-entrances.collection'
import { ServiceEntrance } from '../models/service-entrance.model'

Meteor.methods({
  'service_entrance.upsert': (se: ServiceEntrance, place_id: string) => {
    ServiceEntrances.collection.update(
      { place_ids: [place_id], created_by: Meteor.userId() },
      {
        $setOnInsert: {
          created_at: new Date()
        },
        $set: {
          updated_at: new Date(),
          'location.lat': se.location.lat,
          'location.lng': se.location.lng,
          'coi_is_required': se.coi_is_required,
          'check_in': se.check_in,
          'type': se.type,
          'long_push': se.long_push,
          'note': se.note,
          'restriction': se.restriction,
          'elevator': se.elevator,
        }
      },
      { upsert: true }
    );
  }
});

Meteor.methods({
  'service_entrance.init': (place_id: string) => {
    ServiceEntrances.collection.update(
      { place_ids: [place_id], created_by: Meteor.userId() },
      {
        $setOnInsert: {
          created_at: new Date()
        }
      },
      { upsert: true }
    );
  }
});
