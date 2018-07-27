import { NumDetailsComponent } from './num-details/num-details.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumberComponent } from './number/number.component';

const routes: Routes = [
{
  path:'',
  component:UsersComponent
},
{
  path:'posts',
  component:PostsComponent
},
{
  path:'details/:id',
  component:DetailsComponent
},
{
  path:'number',
  component:NumberComponent
},
{
  path:"number/:num",
  component:NumDetailsComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
