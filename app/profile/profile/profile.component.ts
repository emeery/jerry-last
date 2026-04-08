import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuth } from '../../store/selectors/auth.selector';
import { AuthService } from '../../auth/auth.service';
import { selectCurrentTheme } from '../../store/selectors/theme.selectors';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TOGGLE_THEME } from '../../store/actions/theme.actions';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  currentTheme$: Observable<string>;
  pokeball = '../../assets/images/icon.png';
  constructor(
    private store: Store,
    private _authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private translate: TranslateService
  ) {
    this.matIconRegistry.addSvgIcon(
      'custom-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/icon.svg')
    );
    this.translate.setFallbackLang('es')
    this.translate.use('es'); // Set default language
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(selectIsAuth);
    this.currentTheme$ = this.store.select(selectCurrentTheme);
  }

  logout() {
    this._authService.logout();
  }

  toggleTheme(): void {
    this.store.dispatch(TOGGLE_THEME());
  }
}
