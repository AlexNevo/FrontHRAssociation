import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from "./list-employees/list-employees.component";
import {EmployeeRoutingModule} from "./employee-routing.module";
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListEmployeesComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListEmployeesComponent,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule {}
