import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input<string>('');
  clicked = output<string>();

  onClick() {
    console.log("Click of button method");
    this.clicked.emit("Message from button method");
  }
}
