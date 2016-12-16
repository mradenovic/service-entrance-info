export interface ServiceEntrance {
  _id?: string;
  created_by?: string;
  created_at?: Date;
  place_ids?: string[];
  is_temporary?: boolean;
  location?: {
    description?: string;
    lat?: string;
    lng?: string;
  }
  type?: string;
  check_in?: string;
  coi_is_required?: boolean;
  long_push?: number;
  has_elevator?: boolean;
  elevator?: {
    is_dedicated?: boolean;
    is_self_operated?: boolean;
    size?: number;
  };
  parking?: {
    location?: {
      description?: string;
      lat?: string;
      lng?: string;
    }
    type?: string;
    restriction?: string;
  };
  restriction?: {
    days?: {
      from?: string;
      to?: string;
    };
    times?: {
      from?: string;
      to?: string;
    };
  };
  note?: string;
}
