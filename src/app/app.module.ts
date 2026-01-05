import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
/* import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { environment } from '../environments/environment';
import { TodoService } from './todo/todo.service';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ToolbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
