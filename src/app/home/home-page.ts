import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home-page.html',
})
export class HomePage {
  title = 'Demo';

  constructor(private router: Router) { }  

  goToDemoPage() {
    this.router.navigate(['/demo']); 
  }
}
