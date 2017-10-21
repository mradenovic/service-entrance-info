import { ServiceEntrance } from '../models/service-entrance.model'

export class DefaultInfo extends ServiceEntrance {

  constructor() {
    this.created_at = new Date();
    this.access = {
      check_in: "None",
      level: "L",
      has_loading_dock: false,
      has_stairs: false,
      has_ramp: false,
      has_elevator: false,
      is_outside: false,
      long_push: 0,
    };
  }
}
