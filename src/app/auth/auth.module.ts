import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ProfileRoutingModule } from '../profile/profile-routing.module';



@NgModule({
  declarations: [
   //  LoginComponent
  ],
  imports: [
    SharedModule,
    
  ]
})
export class AuthModule { }
