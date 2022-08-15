import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperUserRoutingModule } from './super-user-routing.module';
import { SuperUserComponent } from './super-user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SuperUserComponent
  ],
  imports: [
    CommonModule,
    SuperUserRoutingModule,
    SharedModule
  ]
})
export class SuperUserModule { }
