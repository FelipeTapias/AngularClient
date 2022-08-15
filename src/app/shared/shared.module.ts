import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { UserTableComponent } from './user-table/user-table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchInputComponent } from './search-input/search-input.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    FormLoginComponent,
    UserTableComponent,
    FilterPipe,
    SearchInputComponent
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
    FormLoginComponent,
    UserTableComponent,
    SearchInputComponent
  ],
  providers: [
    FilterPipe
  ]
})
export class SharedModule { }
