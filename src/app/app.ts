import { Component, effect, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

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

  protected readonly title = signal('angular-tutorial');
  name = "Sky";
  getUser() {
    return "Return from Function";
  }
  summary = signal("This is Summary Signal");
}
