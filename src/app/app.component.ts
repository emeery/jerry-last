import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentTheme } from './store/selectors/theme.selectors';
import * as fromTheme from '../app/store/reducers/theme.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'jerrylast';
  currentTheme$: Observable<string>;
  constructor(
    private store: Store<fromTheme.ThemeState>
  ) {}

  ngOnInit(): void {
    this.currentTheme$ = this.store.select(selectCurrentTheme);
  }

}
