import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { COMPONENTS } from './app.index';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  bootstrap: [
    COMPONENTS[0]
  ]
})
export class AppModule {}
