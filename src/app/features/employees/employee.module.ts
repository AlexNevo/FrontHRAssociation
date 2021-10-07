import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from "./list-employees/list-employees.component";
import {EmployeeRoutingModule} from "./employee-routing.module";
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

@NgModule({
  declarations: [
    ListEmployeesComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports: [
    ListEmployeesComponent,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule {}
