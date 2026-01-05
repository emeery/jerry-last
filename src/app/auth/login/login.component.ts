import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,

  ) {
    
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['jerry@live.com', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    console.log(this.form.valid);
    if(this.form.valid) {
      this.form.value.password = 'jerry123';
      this.authService.loginUser({email: this.form.value.email,password: this.form.value.password})
    }
  }
}
