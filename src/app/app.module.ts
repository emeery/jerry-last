import { importProvidersFrom, isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { TodoService } from './todo/todo.service';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { uiReducer } from './store/reducers/app.reducer';

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
    AngularFireAuthModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'ui', reducer: uiReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
