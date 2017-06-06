import { SearchPage } from './search/search.page';
import { PlaceViewPage } from './place/place.view.page';

export const DEEP_LINKER_CONFIG = {
  links: [
    { component: SearchPage, name: 'Search', segment: '' },
    { component: PlaceViewPage, name: 'Place Info', segment:'place/:place_id',
      defaultHistory: [SearchPage]  },
  ]
}
