import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForOf, NgIf, CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  title: string;
  age: number;
  num: string;
  pic: string;
}

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [NgForOf, NgIf, CommonModule], 
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$!: Observable<User | undefined>;
  routeSub!: Subscription;
  users: User[] = [
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.route.params.pipe(
      map(params => {
        const userTitle = params['title'];
        return this.users.find(user => user.title === userTitle);
      })
    );
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
