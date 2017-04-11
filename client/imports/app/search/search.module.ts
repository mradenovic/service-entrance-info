import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchComponent } from './search.component'
import { SearchPage } from './search.page'

@NgModule({
  imports:      [
    IonicModule,
   ],
  declarations: [
    SearchComponent,
    SearchPage,
  ],
  exports: [
    SearchComponent,
    SearchPage,
  ],
  entryComponents: [
    SearchComponent,
    SearchPage,
  ],
})
export class SearchModule {}
