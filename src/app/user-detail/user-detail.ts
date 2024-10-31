import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForOf, NgIf, CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, of } from 'rxjs';
import { UserService } from '../shared/services/user-service';

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

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const title = params['title'];
      this.user$ = of(this.userService.getUser(title)); // Call the service method and wrap it in an Observable
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
