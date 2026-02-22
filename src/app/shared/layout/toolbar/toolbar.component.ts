import { Component, computed, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTheme from '../../../store/reducers/theme.reducer';
import {  selectCurrentTheme } from '../../../store/selectors/theme.selectors';
import { Observable } from 'rxjs';
import { TOGGLE_THEME } from '../../../store/actions/theme.actions';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  // icon = computed(() => (this.isDarkThemeOn() ? '🌞' : '🌚'));
  currentTheme$: Observable<string>;
  currentColor$: Observable<string>
  constructor(
    private store: Store
  ) {}
  
  ngOnInit(): void {
    this.currentTheme$ = this.store.select(selectCurrentTheme);
    this.setTheme();
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
}
