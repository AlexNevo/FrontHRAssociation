import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../shared/services/employee.service";
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private modalService: NgbModal, private _employeeService : EmployeeService) { }

  employeeToAdd : Employee =new Employee();

  addForm: FormGroup = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    fonction: new FormControl('', Validators.required)
  });

  modalReference : NgbModalRef;

  ngOnInit(): void {
  }

  @Output()
  addToTable: EventEmitter<Employee> = new EventEmitter<Employee>();

  open(content:any){
    this.modalReference= this.modalService.open(content, {ariaLabelledBy: 'addForm'});
  }
  onValidate(): void{
    this.employeeToAdd = this.addForm.value;
    this.modalReference.close();
    this._employeeService.addEmployee(this.employeeToAdd).subscribe(data => this.employeeToAdd.id = data.id);
    this.addToTable.emit(this.employeeToAdd)
  }
}
