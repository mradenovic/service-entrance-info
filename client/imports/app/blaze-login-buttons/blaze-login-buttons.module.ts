import { NgModule } from '@angular/core';
import { Angular2BlazeTemplateModule } from 'angular2-blaze-template';
import { BlazeLoginButtonsComponent } from './blaze-login-buttons.component'

@NgModule({
  imports: [
    Angular2BlazeTemplateModule
  ],
  declarations: [
    BlazeLoginButtonsComponent,
  ],
  exports: [
    BlazeLoginButtonsComponent,
  ],
})
export class BlazeLoginButtonsModule {}
