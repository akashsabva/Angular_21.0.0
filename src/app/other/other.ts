import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-other',
  imports: [],
  templateUrl: './other.html',
  styleUrl: './other.css',
})
export class Other {
  logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPd6pKSGfqhrwmLLsOBldVxbIe11zF38ZpM6Zlyvl3w&s=10";
  userName = "akashsabva";
  isBtnDisabled = true;
  isActive = true;
  boxWidth = 100;
  bgColor = "blue";
  count = signal(0);

  count2 = 0;

  increment() {
    this.count2++;
  }

  showEvent(e: any) {
    console.log(e);
  }

  user = '';
  updateUsername(value: string) {
    this.user = value;
  }

  signalCount = signal(0);
  incrementSignalCount() {
    this.signalCount.update((c) => c+1);
  }

  handleSubmit(e: any) {
    e.preventDefault();
    console.log("Form Submitted");
  }
}
