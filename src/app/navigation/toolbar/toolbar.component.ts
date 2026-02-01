import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isDarkThemeOn = signal(false);
  icon = computed(() => (this.isDarkThemeOn() ? '🌞' : '🌚'));
  /* constructor(
    private store: 
  ) {
    super(props);
    
  } */
  

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.isDarkThemeOn.update((isDarkThemeOn) => !isDarkThemeOn);
  }
}
