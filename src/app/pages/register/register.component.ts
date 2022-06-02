import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/shared/services/cookie.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  createNewUser(value: any): void {
    console.log(value);
  }

  addCookie(): void {
    this.cookieService.setCookie('admin', 'adminValue', false);
  }
  
}
