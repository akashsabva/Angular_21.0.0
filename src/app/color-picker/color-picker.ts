import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.css',
})
export class ColorPicker {
  selectedColor = signal<string>('#3498db');

  copyColor() {
    navigator.clipboard.writeText(this.selectedColor());
    alert(`Color copied: ${this.selectedColor()}`);
  }
}
