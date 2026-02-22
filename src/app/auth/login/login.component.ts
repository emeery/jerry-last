import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/app.reducer';
import { Observable } from 'rxjs';
import { selectIsLoading } from '../../store/selectors/ui.selectors';
import { selectCurrentTheme } from '../../store/selectors/theme.selectors';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading$: Observable<boolean>;
  currentTheme$: Observable<string>;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store<fromRoot.AppState>
  ) {
    
  }
  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.currentTheme$ = this.store.select(selectCurrentTheme);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['jerry@live.com', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    
    if(this.form.valid) {
      this.form.value.password = 'jerry123';
      this.authService.loginUser({email: this.form.value.email,password: this.form.value.password})

    }
  }
}
