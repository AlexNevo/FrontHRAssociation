import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {ListEmployeesComponent} from "./list-employees/list-employees.component";

const routes : Routes = [
  {
    path: 'employees',
    component:ListEmployeesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],

  exports : [
    RouterModule
  ]
}) export class employeeRoutingModule{}
