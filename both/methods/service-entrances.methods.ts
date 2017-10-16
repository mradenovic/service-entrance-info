import { Meteor } from 'meteor/meteor';
import { ServiceEntrances } from '../collections/service-entrances.collection'
import { ServiceEntrance } from '../models/service-entrance.model'
import { DefaultInfo } from '../models/service-entrance.default'

Meteor.methods({
  'service_entrance.upsert': (se: ServiceEntrance, place_id: string) => {
    
    // Make sure the user is logged in before updating info
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized',
        'User must be logged in to edit data');
    }

    se.updated_at = new Date();
    delete se.created_at;
    delete se.created_by;
    delete se._id;
    ServiceEntrances.collection.update(
      { place_ids: [place_id], created_by: Meteor.userId() },
      {
        $setOnInsert: {
          created_at: new Date()
        },
        $set: se
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
        $setOnInsert: new DefaultInfo()
      },
      { upsert: true }
    );
  }
});
