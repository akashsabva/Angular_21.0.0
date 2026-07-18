import { Component } from '@angular/core';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-subscribe',
  imports: [],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.css',
})
export class Subscribe {

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      console.log(data);
      
      this.users = data;
    });
  }

}
