// TOD find better way to initialize data
export class DefaultInfo {
  created_at: any;
  access: any;
  coi: any;
  elevator: any;
  restriction: any;

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
    this.coi = {
      is_required: false
    };
    this.elevator = {
      is_available: false
    };
    this.restriction = {
      exists: false,
      days: {
        mon: true,
        tue: true,
        wed: true,
        thu: true,
        fri: true,
        sat: false,
        sun: false
      },
      times: {
        from: '09:00',
        to: '17:00'
      }
    };
  }
}
