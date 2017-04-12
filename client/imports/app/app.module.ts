import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from "./app.component";

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MAPS_API_LOADER_CONFIG } from './app.credentials';
import { DEEP_LINKER_CONFIG } from './app.deep-linker-config';
import { SearchModule } from './search/search.module';
import { BlazeLoginButtonsModule } from './blaze-login-buttons/blaze-login-buttons.module';
import { PlacesModule } from './places/places.module';

@NgModule({
  imports: [
    BrowserModule,
    BlazeLoginButtonsModule,
    IonicModule.forRoot(AppComponent, {}, DEEP_LINKER_CONFIG),

    AgmCoreModule.forRoot(MAPS_API_LOADER_CONFIG),
    SearchModule,
    PlacesModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    AppComponent,
  ]
})
export class AppModule {}
