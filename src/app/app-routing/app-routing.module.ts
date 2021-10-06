import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {NotFoundComponent} from "../shared/components/not-found/not-found.component";



const routes : Routes = [
  {
    path: '',
    pathMatch : 'full',
    redirectTo: '/employees'
  },
  {
    path:'**',
    component: NotFoundComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
