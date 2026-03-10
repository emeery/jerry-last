import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuth } from '../../store/selectors/auth.selector';
import { AuthService } from '../../auth/auth.service';
import { selectCurrentTheme } from '../../store/selectors/theme.selectors';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
    private store:Store,
    private _authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'custom-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/icon.svg')
    );
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(selectIsAuth);
    this.currentTheme$ = this.store.select(selectCurrentTheme);
  }

  logout() {
    this._authService.logout();
  }
}
