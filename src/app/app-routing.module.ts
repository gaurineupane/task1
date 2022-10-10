import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostApiComponent} from "./post-api/post-api.component";
import {HomeComponent} from "./home/home.component";
import {PutApiComponent} from "./put-api/put-api.component";

const routes: Routes = [
  {
    path:'post',component:PostApiComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'put/:id',component:PutApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
