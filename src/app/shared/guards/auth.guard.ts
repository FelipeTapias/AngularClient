import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService,
              private router: Router){}

  canActivate(): boolean {
    const myCookies = this.cookieService.getCookie('admin');
    if(myCookies == 'adminValue') {
      console.log('Entre');
      return true
    }else {
      console.log('No entre');
      this.router.navigate(['/login']);
      return false
    }
  }
  
}
