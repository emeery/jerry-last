import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ToolbarComponent } from '../shared/layout/toolbar/toolbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProfileComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    TranslateModule
  ]
})
export class ProfileModule { }
