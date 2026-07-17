import { Component, inject } from '@angular/core';
import { User } from '../../service/user';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-api',
  imports: [],
  templateUrl: './signal-api.html',
  styleUrl: './signal-api.css',
})
export class SignalApi {
  userService = inject(User);

  users: any = toSignal(this.userService.getUsers());
}
