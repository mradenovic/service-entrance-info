import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServiceEntranceViewComponent } from './service-entrance-view.component'
import { ServiceEntranceFormComponent } from './service-entrance-form.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ServiceEntranceViewComponent,
    ServiceEntranceFormComponent,
  ],
  exports: [
    ServiceEntranceViewComponent,
    ServiceEntranceFormComponent,
  ],
})
export class ServiceEntranceModule {}
