import { ServiceEntrance } from './service_entrance.model'

export interface Place {
  place_ids: string[];
  fromatted_address: string;
  infos: ServiceEntrance[];
}
