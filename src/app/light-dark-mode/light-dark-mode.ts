import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-light-dark-mode',
  imports: [],
  templateUrl: './light-dark-mode.html',
  styleUrl: './light-dark-mode.css',
})
export class LightDarkMode {
  isDarkMode = signal<boolean>(false);

  constructor() {
    effect(() => {
      if(this.isDarkMode()) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    })
  }

  handleMode() {
    this.isDarkMode.update(mode => !mode);
  }
}
