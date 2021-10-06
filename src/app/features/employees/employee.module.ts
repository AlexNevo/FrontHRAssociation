import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from "./list-employees/list-employees.component";
import {EmployeeRoutingModule} from "./employee-routing.module";

@NgModule({
  declarations: [
    ListEmployeesComponent
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
