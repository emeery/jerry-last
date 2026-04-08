import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
// import { LoginComponent } from './login/login.component';
//import { ProfileRoutingModule } from '../profile/profile-routing.module';



@NgModule({
  declarations: [
   //  LoginComponent // app module for 1st view
  ],
  imports: [
    SharedModule,
  ]
})
export class AuthModule { }
