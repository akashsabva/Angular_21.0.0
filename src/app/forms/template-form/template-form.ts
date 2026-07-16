import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  name = signal('');
  email = signal('');

  submitForm () {
    console.log(`Name: ${this.name()}, Email: ${this.email()}`);
  }
}
