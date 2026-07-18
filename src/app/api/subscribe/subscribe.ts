import { Component, signal } from '@angular/core';
import { UserService } from '../../service/user-service';
import { User } from '../../models/user';

@Component({
  selector: 'app-subscribe',
  imports: [],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.css',
})
export class Subscribe {

  users = signal<User[]>([]);
  name = signal('');
  email = signal('');
  updateUserId = signal<number | null>(null);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadData();
  }

  //Get User Data (GET API)
  loadData() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users.set(data);
    });
  }

  //Click of Edit User (PUT API)
  editUser(user: User) {
    this.updateUserId.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
  }

  //Add or Update User (POST API)
  submitForm () {
    const userData : User = { name: this.name(), email: this.email() };
    if(this.updateUserId() !== null) {
      this.userService.updateUser(this.updateUserId()!, userData).subscribe(() => {
        alert("Updated successfully.");
        this.afterSave();
      });
    } else {
      this.userService.addUser(userData).subscribe(() => {
        alert("Your data has been saved successfully.");
        this.afterSave();
      });
    }
  }

  //Click of Delete User (DELETE API)
  deleteUser(user: User) {
    const confirmDelete = confirm(`Are you sure you want to delete ${user.name}`);
    if(!confirmDelete) return;
    this.userService.deleteUser(user.id!).subscribe(() => {
      this.users.set(
        this.users().filter(u => u.id !== user.id)
      );
    })
  }

  afterSave() {
    this.loadData();
    this.name.set('');
    this.email.set('');
    this.updateUserId.set(null);
  }


}
