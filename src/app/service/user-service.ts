import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = "http://localhost:3000/users";
  
  constructor(private http: HttpClient) {}

  //Get all Users (GET API)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  //Add User (POST API)
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  //Update Existing User (PUT API - Fully Update)
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  //Delete User (DELETE API)
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
