import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {

  userSignal = signal({name: '', email: ''});

  loginForm = form(this.userSignal);

  submitForm() {
    console.log(`Name: ${this.userSignal().name}, Email: ${this.userSignal().email}`);
  }
}
