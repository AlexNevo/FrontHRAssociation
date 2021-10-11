import { Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../shared/services/employee.service";
import {Employee} from "../../../models/employee";


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {


  employees : Employee[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe( table => this.employees = table);
  }
  removeFromList(employee : Employee) : void {
    let idToDelete:number = this._employeeService.findEmployeeById(employee, this.employees);
    this.employees.splice(idToDelete, 1);
  }
}
