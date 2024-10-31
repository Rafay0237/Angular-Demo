import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  title: string;
  age: number;
  num: string;
  pic: string;
}

@Injectable({
  providedIn: 'root'  
})
export class UserService {
  private users: User[] = [
    {
      title: 'John Doe',
      age: 25,
      num: '+1-555-1234',
      pic: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    {
      title: 'Jane Smith',
      age: 30,
      num: '+1-555-5678',
      pic: 'https://randomuser.me/api/portraits/women/2.jpg' 
    },
    {
      title: 'Mike Ross',
      age: 35,
      num: '+1-555-9876',
      pic: 'https://randomuser.me/api/portraits/men/3.jpg' 
    },
    {
      title: 'John',
      age: 40,
      num: '+1-555-9876',
      pic: 'https://randomuser.me/api/portraits/men/3.jpg' 
    },
    {
      title: 'Khan',
      age: 25,
      num: '+1-555-9876',
      pic: 'https://randomuser.me/api/portraits/men/3.jpg' 
    },
    {
      title: 'Tacy',
      age: 15,
      num: '+1-555-9876',
      pic: 'https://randomuser.me/api/portraits/men/3.jpg' 
    },
    {
      title: 'Ross',
      age: 55,
      num: '+1-555-9876',
      pic: 'https://randomuser.me/api/portraits/men/3.jpg' 
    }
  ]; 

  // Observable stream to watch for changes in users array
  private usersSubject = new BehaviorSubject<User[]>(this.users);
  users$ = this.usersSubject.asObservable();

  // Method to get the users array
  getUsers(): User[] {
    return this.users;
  }

  // Method to add a user
  addUser(newUser: User): void {
    this.users.push(newUser);
    this.usersSubject.next(this.users);  // Notify all subscribers about the change
  }
}
