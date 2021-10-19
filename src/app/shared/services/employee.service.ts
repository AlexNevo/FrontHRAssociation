import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import {Employee} from "../../models/employee";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn:'root'
})
export class EmployeeService{

  constructor(private _httpClient: HttpClient) {}

  getEmployees() : Observable<Employee[]>{
    return this._httpClient.get<Employee[]>(environment.apis.employees.url);
  }
  deleteEmployee(id: string) : Observable<unknown>{
    return this._httpClient.delete(environment.apis.employees.url+"/"+id)
  }

  findEmployeeById(employee: Employee, employees: Employee[]):number{
    return employees.indexOf(employee)
  }

  updateEmployee(id: string, updatedEmployee : Employee) : Observable<Employee>{
    return this._httpClient.put<Employee>(environment.apis.employees.url+"/"+id, updatedEmployee)
  }

  addEmployee(employeeToAdd : Employee) : Observable<Employee>{
    return this._httpClient.post<Employee>(environment.apis.employees.url, employeeToAdd)
  }

}


