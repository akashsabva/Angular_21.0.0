import { Component } from '@angular/core';
import { User } from '../../service/user';

@Component({
  selector: 'app-subscribe',
  imports: [],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.css',
})
export class Subscribe {

  users: any[] = [];

  constructor(private userService: User) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      console.log(data);
      
      this.users = data;
    });
  }

}
