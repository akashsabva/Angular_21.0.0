import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPd6pKSGfqhrwmLLsOBldVxbIe11zF38ZpM6Zlyvl3w&s=10";
  userName = "akashsabva";
  isBtnDisabled = true;
  isActive = true;
  boxWidth = 100;
  bgColor = "blue";
  count = signal(0);
}
