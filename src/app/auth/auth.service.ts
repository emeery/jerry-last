import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

export interface AuthData {
    email: string;
    password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange = new Subject<boolean>();
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  registerUser() {
    this.auth.createUserWithEmailAndPassword('jerry@live.com', 'jerry123')
      .then((res: any) => {
        //this.authSuccesfully();
      }).catch(err => console.log(err))
  }

  loginUser(authData: AuthData) {
     this.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then((res: any) => {
      console.log('login',res.user._delegate.accessToken)
      this.router.navigate(['/list'])
      // this.authSuccesfully();
    }).catch(err => console.log(err))
    // this.store.dispatch({type: 'STOP_LOADING'});•
  }
}