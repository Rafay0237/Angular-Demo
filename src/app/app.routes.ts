import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component'; 
import { UserDetailComponent } from './user-detail/user-detail';
import { HomePage } from './home/home-page';
import { AddUserComponent } from './add-user/add-user';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,  
  },
  {
    path: 'add-user',
    component: AddUserComponent,  
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
