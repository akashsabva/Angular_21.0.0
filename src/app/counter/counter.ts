import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;

  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   this.count--;
  // }

  // reset() {
  //   this.count = 0;
  // }

  handleEvent(op: string) {
    if(op == 'incre') {
      this.count++;
    } else if(op == 'decry') {
      if(this.count > 0) {
        this.count--;
      }
    } else {
      this.count = 0;
    }
  }

}
