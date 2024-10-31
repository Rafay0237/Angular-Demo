import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { AddUserComponent } from './add-user/add-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prac';
}
