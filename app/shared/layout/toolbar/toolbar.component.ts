import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../store/reducers/app.reducer';
import {  selectCurrentTheme } from '../../../store/selectors/theme.selectors';
import { TOGGLE_THEME } from '../../../store/actions/theme.actions';
import { AuthService } from '../../../auth/auth.service';
import { selectIsAuth } from '../../../store/selectors/auth.selector';
import { TranslateService } from '@ngx-translate/core';
import { selectCurrentLanguage } from '../../../store/selectors/language.selector';
import { TOGGLE_LANGUAGE } from '../../../store/actions/language.actions';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  currentTheme$: Observable<string>;
  isAuthenticated$: Observable<boolean>;
  currentLanguage$: Observable<string>;
  constructor(
    private store: Store<fromRoot.AppState>,
    private authService: AuthService,
    private translate: TranslateService
  ) {}
  
  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(selectIsAuth);
    this.currentTheme$ = this.store.select(selectCurrentTheme);
    this.currentLanguage$ = this.store.select(selectCurrentLanguage);
    this.setTheme();
    this.setLanguage();
  }

  setLanguage(): void {
    // this.translate.addLangs(['en', 'es']);
    this.store.select(selectCurrentLanguage).subscribe(lang => {
      console.log('ña', lang);
      this.translate.setFallbackLang(lang);
      this.translate.use(lang);
    });
  }

  toggleLanguage() {
    this.store.dispatch(TOGGLE_LANGUAGE());
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
    console.log('logout');
    this.authService.logout();
  }
}
