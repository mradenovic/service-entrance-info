export interface ServiceEntrance {
  place_id: string;
  location: {
    description: string;
    lat: string;
    lng: string;
  }
  type: string;
  check_in: string;
  long_push: number;
  elevator: {
    dedicated: boolean;
    self_service: boolean;
    size: number;
  };
  parking: {
    type: string;
    restriction: string;
  };
  restriction: {
    days: {
      from: string;
      to: string;
    };
    times: {
      from: string;
      to: string;
    };
  };
  note: string;
}
