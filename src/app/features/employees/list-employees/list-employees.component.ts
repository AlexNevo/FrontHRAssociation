import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../shared/services/employee.service";
import {Employee} from "../../../models/employee";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {


  employees : Employee[];
  _subscriptions : Subscription[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    const subscription = this._employeeService.getEmployees().subscribe( table => this.employees = table);
    this._subscriptions.push(subscription);
  }
  ngOnDestroy(): void {
    this._subscriptions.forEach(item => item.unsubscribe())
  }

}
