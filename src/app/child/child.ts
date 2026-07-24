import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  message = input<string>();
  childToParent = signal<string>('Message of Child to Parent');

  updateChildToParent() {
    this.childToParent.set('Update Message of Child to Parent');
  }

  callFromParent() {
    console.log("CALLED");
  }

}
