import { MongoObservable } from 'meteor-rxjs';

export const ServiceEntrances = new MongoObservable.Collection<any>('service_entrances');
