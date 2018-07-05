import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './guard.service';
import { CodeComponent } from './code/code.component';
import { RememberComponent } from './remember/remember.component';

const routes: Routes = [
  { path: '', canActivate: [GuardService], component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'code', component: CodeComponent},
  { path: 'remember', component: RememberComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
