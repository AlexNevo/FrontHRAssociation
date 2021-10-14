import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {EmployeeService} from "../../../shared/services/employee.service";
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {



  constructor( private modalService: NgbModal, private _employeeService : EmployeeService) { }

  @Input()
  employeeToUpdate : Employee;

  modalReference : NgbModalRef;

  updateForm: FormGroup = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
  open(content:any){
    this.modalReference= this.modalService.open(content, {ariaLabelledBy: 'deleteWarning'});
  }

  onValidate(): void{
    this.employeeToUpdate.firstName = this.updateForm.value.firstName;
    this.employeeToUpdate.lastName = this.updateForm.value.lastName;
    this.employeeToUpdate.email = this.updateForm.value.email;
    this.modalReference.close();
    this._employeeService.updateEmployee(this.employeeToUpdate.id, this.employeeToUpdate).subscribe()

  }
}
