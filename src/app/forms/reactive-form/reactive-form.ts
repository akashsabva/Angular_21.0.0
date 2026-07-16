import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  formRF : any;
  userSignal = signal({nameRF: '', emailRF: ''});

  constructor(private fb: FormBuilder) {
    this.formRF = this.fb.group({
      nameRF: '',
      emailRF: ''
    })

    this.formRF.valueChanges.subscribe((value: any) => {
      this.userSignal.set(value)
    });
  }

  submitFormRF () {
    console.log(`Name: ${this.userSignal().nameRF}, Email: ${this.userSignal().emailRF}`);
  }
}
