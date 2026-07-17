import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-api',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api {

}
