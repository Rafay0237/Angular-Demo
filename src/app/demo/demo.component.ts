import { Component } from '@angular/core';
import { SearchPipe } from '../shared/pipes/search-pipe';
import { NgForOf, NgIf, CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserService } from '../shared/services/user-service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgForOf, NgIf, CommonModule, SearchPipe, FormsModule], // Add CommonModule here
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  users$!: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users$ = this.userService.users$;
  }

  navigateToUser(title: string) {
    this.router.navigate(['/user', title]);
  }

  public searchTerm: string = '';
}
