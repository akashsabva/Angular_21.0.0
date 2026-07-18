import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../models/user';

@Component({
  selector: 'app-signal-api',
  imports: [],
  templateUrl: './signal-api.html',
  styleUrl: './signal-api.css',
})
export class SignalApi {
  userService = inject(UserService);

  users: any = toSignal<User[]>(this.userService.getUsers());
}
