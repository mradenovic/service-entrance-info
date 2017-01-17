import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component'
import { BlazeLoginButtonsModule } from '../blaze-login-buttons/blaze-login-buttons.module';

@NgModule({
  imports: [
    BlazeLoginButtonsModule
  ],
  declarations: [
    NavigationComponent,
  ],
  exports: [
    NavigationComponent,
  ],
})
export class NavigationModule {}
