import { Component, inject } from '@angular/core';
import { Auth } from '../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(Auth);
  router = inject(Router);
  
  onLogin() {
    this.authService.login();
    this.router.navigate(['']);
  }
}
