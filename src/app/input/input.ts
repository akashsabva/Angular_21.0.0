import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  label = input<string>();
  type = input<string>();
  // value = input<string>();
  valueChange = output<string>();
}
