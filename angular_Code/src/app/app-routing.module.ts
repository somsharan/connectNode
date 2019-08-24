import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DashComponent } from './component/dash/dash.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { fromEventPattern } from 'rxjs';

const routes: Routes = [
{ path:'dash', component: DashComponent},
{path:'signup', component: SignupComponent},
{path:'**', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
