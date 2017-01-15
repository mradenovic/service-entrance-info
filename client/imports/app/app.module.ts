import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MAPS_API_LOADER_CONFIG } from './app.credentials'
import { COMPONENTS } from './app.index';
import { AppRoutingModule } from './app-routing.module'
import { SearchModule } from './search/search.module'
import { BlazeLoginButtonsModule } from './blaze-login-buttons/blaze-login-buttons.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
    SearchModule,
    BlazeLoginButtonsModule,
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
