import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

// import { ServiceEntranceViewComponent } from './service-entrance-view.component'
import { ServiceEntranceData } from './service.entrance.data'
import { ServiceEntranceView } from './service.entrance.view'
import { ServiceEntranceForm } from './service.entrance.form'
import { RestrictionField } from './restriction.field'
import { ElevatorComponent } from './elevator/elevator.component'
import { COIComponent } from './coi/coi.component'
import { AccessComponent } from './access/access.component'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  declarations: [
    ServiceEntranceView,
    ServiceEntranceForm,
    RestrictionField,
    ElevatorComponent,
    COIComponent,
    AccessComponent,
  ],
  exports: [
    ServiceEntranceView,
    ServiceEntranceForm,
  ],
})
export class ServiceEntranceModule {}
