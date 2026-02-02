import { Component, computed, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTheme from '../../store/reducers/theme.reducer';
import { selectCurrentTheme } from '../../store/selectors/theme.selectors';
import { Observable } from 'rxjs';
import { SET_THEME, TOGGLE_THEME } from '../../store/actions/theme.actions';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  isDarkThemeOn = signal(false);
  icon = computed(() => (this.isDarkThemeOn() ? '🌞' : '🌚'));
  constructor(
    private store: Store
  ) {}
  
  ngOnInit(): void {
    this.setTheme();
  }

  setTheme(): void {
    this.store.select(selectCurrentTheme).subscribe(theme => {
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
