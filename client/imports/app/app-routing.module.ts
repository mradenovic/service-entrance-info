import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component'
import { PlaceComponent } from './place/place.component'
import { PlaceEditComponent } from './place-edit/place-edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search',  component: SearchComponent },
  { path: 'place/:place_id',  component: PlaceComponent },
  { path: 'place/:place_id/edit',  component: PlaceEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
