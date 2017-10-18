import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { Angular2BlazeTemplateModule } from 'angular2-blaze-template';
import { BlazeLoginButtonsComponent } from './blaze-login-buttons.component';
import { BlazeLoginButtonsPage } from './blaze-login-buttons.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Angular2BlazeTemplateModule
  ],
  declarations: [
    BlazeLoginButtonsComponent,
    BlazeLoginButtonsPage,
  ],
  exports: [
    BlazeLoginButtonsComponent,
    BlazeLoginButtonsPage,
  ],
  entryComponents: [
    BlazeLoginButtonsPage,
  ]
})
export class BlazeLoginButtonsModule {}
