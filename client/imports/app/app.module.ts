import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlacesComponent } from './places/places.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    PlacesComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
