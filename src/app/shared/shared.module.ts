import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormRegisterComponent } from './form-register/form-register.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent
  ]
})
export class SharedModule { }
