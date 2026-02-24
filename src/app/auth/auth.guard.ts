import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

import { selectCurrentAuth } from '../store/selectors/auth.selector';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private store: Store
    ) {}
  
  canActivate() {
    
    return this.store.select(selectCurrentAuth).pipe(take(1));
  }

  canLoad() {
    return this.store.select(selectCurrentAuth).pipe(take(1));
  }
}
