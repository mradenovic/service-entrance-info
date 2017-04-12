import { SearchPage } from './search/search.page';
import { PlacePage } from './place/place.page';

export const DEEP_LINKER_CONFIG = {
  links: [
    { component: SearchPage, name: 'Search', segment: '' },
    { component: PlacePage, name: 'Place Info', segment:'place/:place_id',
      defaultHistory: [SearchPage]  },
  ]
}
