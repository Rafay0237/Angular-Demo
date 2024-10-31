import { Component } from '@angular/core';
import { SearchPipe } from '../shared/pipes/search-pipe';
import { NgForOf, NgIf } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgForOf, NgIf, SearchPipe,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})


export class DemoComponent {
  constructor(private router: Router) {}

  navigateToUser(title: string) {
    this.router.navigate(['/user', title]);
  }
    users = [
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
    clear=[...this.users]
    public searchTerm: string = '';

}
