import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard'; 

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
                        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
                        { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
                        { path: 'super-user', loadChildren: () => import('./super-user/super-user.module').then(m => m.SuperUserModule), canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
