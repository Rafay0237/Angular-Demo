import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component'; 
import { UserDetailComponent } from './user-detail/user-detail';
import { HomePage } from './home/home-page';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,  
  },
  {
    path: 'user/:title',
    component: UserDetailComponent,  
  },
  {
    path: '',
    component:HomePage,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],
})
export class AppRoutingModule {}
