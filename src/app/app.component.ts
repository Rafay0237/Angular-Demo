import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { AddUserComponent } from './add-user/add-user';
import { UserDetailComponent } from './user-detail/user-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,AddUserComponent,UserDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prac';
}
