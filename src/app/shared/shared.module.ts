import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    FormLoginComponent
  ]
})
export class SharedModule { }
