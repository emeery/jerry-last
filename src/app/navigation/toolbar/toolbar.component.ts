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
      /* this.toggleTheme(theme); */

      if(theme === 'dark-theme') {
        document.body.classList.toggle('dark-theme');
      } 
      if(theme === 'light-theme') {

      }
    });
  }
  

  toggleTheme(): void {
      this.store.dispatch(TOGGLE_THEME());
     /* const currentTheme = this.store.select(selectCurrentTheme);
     currentTheme.subscribe(theme => {
      if(theme === 'dark-theme')  {
        console.log('the',theme);
        this.store.dispatch(SET_THEME({theme: 'light-theme'}));
        document.body.classList.toggle('dark-theme');
      } else {
        document.body.classList.toggle('light-theme');
      } */
      
      /* else {
        this.store.dispatch(SET_THEME({theme: 'dark'}))
      } */
       // document.body.classList.remove('light', 'dark');
      //if(theme == 'light') this.store.dispatch(SET_THEME({theme: 'dark'}))
      
        /* else {this.store.dispatch(SET_THEME({theme: 'dark '}))} */
/*       newTheme = theme === 'dark' ? 'light': 'dark';
      console.log('new',newTheme); */
      

     // const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

   /*  
    this.isDarkThemeOn.update((isDarkThemeOn) => !isDarkThemeOn); */
  }
}
