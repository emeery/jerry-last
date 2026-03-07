import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../store/reducers/app.reducer';
import {  selectCurrentTheme } from '../../../store/selectors/theme.selectors';
import { TOGGLE_THEME } from '../../../store/actions/theme.actions';
import { AuthService } from '../../../auth/auth.service';
import { selectIsAuth } from '../../../store/selectors/auth.selector';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  currentTheme$: Observable<string>;
  isAuthenticated$: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.AppState>,
    private authService: AuthService
  ) {}
  
  ngOnInit(): void {
    this.currentTheme$ = this.store.select(selectCurrentTheme); // get the state theme
    this.setTheme(); // set current theme
    this.isAuthenticated$ = this.store.select(selectIsAuth);
  }

  setTheme(): void {
    this.currentTheme$.subscribe(theme => {
      this.applyTheme(theme);
    });
  }
  

  toggleTheme(): void {
    this.store.dispatch(TOGGLE_THEME());
  }

  private applyTheme(theme: string): void {
    if (theme === 'dark-theme') {
      document.body.classList.toggle('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  logout() {
    this.authService.logout();
  }
}
