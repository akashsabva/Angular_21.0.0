import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  fb = inject(FormBuilder);
  formRF : any;
  userSignal = signal({nameRF: '', emailRF: ''});

  constructor() {
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


  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {
    validators: this.passwordMatchValidator
  });

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    
    return password === confirm ? null : { passwordMismatch: true };
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    this.form.reset();
  }

  canDeactivate() {
    return confirm("Do you want to leave this page?");
  }
}
