import { ServiceEntrance } from './service_entrance.model'

export interface Place {
  place_id: string;
  fromatted_address: string;
  info: ServiceEntrance[];
}
