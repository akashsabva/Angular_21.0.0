import { Component, effect, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { ShortNamePipe } from './pipe/short-name-pipe';
import { ConvertCurrencyPipe } from './pipe/convert-currency-pipe';
import { CommonModule } from '@angular/common';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Counter, ShortNamePipe, ConvertCurrencyPipe, CommonModule, Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  fullName: string = "John Doe";
  totalAmount: number = 20;
  usdToInrRate: number = 90;

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
