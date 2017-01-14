import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import { MAPS_API_LOADER_CONFIG } from './app.credentials'
import { COMPONENTS } from './app.index';
import { AppRoutingModule } from './app-routing.module'
import { SearchModule } from './search/search.module'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
    AccountsModule,
    SearchModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    Title,
  ],
  bootstrap: [
    COMPONENTS[0]
  ]
})
export class AppModule {}
