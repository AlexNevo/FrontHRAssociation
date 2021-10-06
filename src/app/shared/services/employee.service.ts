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

}
