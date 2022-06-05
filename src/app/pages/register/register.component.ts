import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.getUsers().subscribe(resp => {
      console.log(resp);

    });
  }

  createNewUser(value: any): void {
    console.log(value);

    const userBody: User = {
      name: value.name,
      lastName: value.lastName,
      userName: value.userName,
      idDocument: value.idDocument,
      email: value.email,
      password: value.password,
      URLImage: value.URLImage,
      quote: value.quote
    }
    console.log(userBody);

    this.registerService.postNewUser(userBody).subscribe(resp => {
      console.log(resp.status);
      if(resp.status == 200) {
        console.log('Usuario creado');
      }
    }, err => {
      console.log(err)
    });
  }

}
