import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuth } from '../../store/selectors/auth.selector';
import { AuthService } from '../../auth/auth.service';
import { selectCurrentTheme } from '../../store/selectors/theme.selectors';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  currentTheme$: Observable<string>;
  constructor(
    private store:Store,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(selectIsAuth);
    this.currentTheme$ = this.store.select(selectCurrentTheme);
  }

  logout() {
    this._authService.logout();
  }
}
