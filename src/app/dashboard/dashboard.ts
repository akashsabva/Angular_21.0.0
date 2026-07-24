import { Component, signal, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter } from '../counter/counter';
import { ShortNamePipe } from '../pipe/short-name-pipe';
import { ConvertCurrencyPipe } from '../pipe/convert-currency-pipe';
import { Todo } from '../todo/todo';
import { Child } from '../child/child';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { from, filter } from 'rxjs';
import { Other } from '../other/other';

@Component({
  selector: 'app-dashboard',
  imports: [Other, Counter, ShortNamePipe, ConvertCurrencyPipe, CommonModule, Todo, Child, Card, Button, Input],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  // @ViewChild(Child) child1!: Child;
  child1 = viewChild(Child);

  ngAfterViewInit() {
    this.child1()?.callFromParent();
  }

  email = "";
  onEmailChange(value: string) {
    this.email = value;
  }

  msg = '';
  saveData(message: string) {
    console.log(message);
    this.msg = message;
  }

  parentTochild: string = 'Message of Parent to Child';

  fullName: string = "John Doe";
  totalAmount: number = 20;
  usdToInrRate: number = 90;

  protected readonly title = signal('angular-tutorial');
  name = "Sky";
  getUser() {
    return "Return from Function";
  }
  summary = signal("This is Summary Signal");

  constructor() {
    from([1,2,3,4,5]).pipe(
      filter(x => x%2 === 0)
    ).subscribe(value => console.log(value));
  }
}
