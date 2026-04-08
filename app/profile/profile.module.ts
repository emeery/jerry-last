import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from '../shared/layout/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ToolbarComponent
  ],
  imports: [
    SharedModule,
    TranslateModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ProfileRoutingModule,
  ], 
  exports: [
    
  ]
})
export class ProfileModule { }
