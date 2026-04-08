import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLoading } from '../../store/selectors/ui.selectors';
import { selectCurrentTheme } from '../../store/selectors/theme.selectors';
import { TOGGLE_THEME } from '../../store/actions/theme.actions';
import { TranslateService } from '@ngx-translate/core';
import { selectCurrentLanguage } from '../../store/selectors/language.selector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading$: Observable<boolean>;
  currentTheme$: Observable<string>;
  currentLanguage$: Observable<string>;
  isAuthenticated$: Observable<boolean>;
  constructor(
    private store: Store,
    private _authService: AuthService,
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    /* this.translate.setFallbackLang('es')
    this.translate.use('es'); */
  }

  ngOnInit(): void {
    this.currentTheme$ = this.store.select(selectCurrentTheme);
    this.currentLanguage$ = this.store.select(selectCurrentLanguage);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      email: ['jerry@live.com', [Validators.required, Validators.email]],
    })
  }

  setLanguage(): void {
    this.translate.addLangs(['en', 'es']);
    this.store.select(selectCurrentLanguage).subscribe(lang => {
      this.translate.setFallbackLang(lang);
      this.translate.use(lang);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.value.password = 'jerry123';
      this._authService.loginUser({ email: this.form.value.email, password: this.form.value.password })
    }
  }

  toggleTheme(): void {
    this.store.dispatch(TOGGLE_THEME());
  }
}
