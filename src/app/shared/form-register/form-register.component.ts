import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  @Output() sendData = new EventEmitter();
  formUser: FormGroup;

  constructor() {
    this.formUser = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      userName: new FormControl(),
      idDocument: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      URLImage: new FormControl(),
      quote: new FormControl(),
      birthDayDate: new FormControl()
    });
  }

  ngOnInit(): void {

  }

  onSubmitData() {
    this.sendData.emit(this.formUser.value);
  }


}

