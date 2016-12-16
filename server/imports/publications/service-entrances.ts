import { Meteor } from 'meteor/meteor';
import { ServiceEntrances } from '../../../both/collections/service-entrances.collection'

Meteor.publish('service_entrance', function(place_id: string) {
  return ServiceEntrances.find({place_ids: place_id}, {sort: {updated_at: -1}});
});
