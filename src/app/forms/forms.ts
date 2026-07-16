import { Component, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {

  name = signal('');
  email = signal('');

  submitForm () {
    console.log(`Name: ${this.name()}, Email: ${this.email()}`);
  }

  //Below code for Recative Form

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
