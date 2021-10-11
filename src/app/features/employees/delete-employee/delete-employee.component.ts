import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeService} from "../../../shared/services/employee.service";
import {Employee} from "../../../models/employee";


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  @Input()
  employeeToDelete : Employee;

  @Output()
  removeFromTable: EventEmitter<Employee> = new EventEmitter<Employee>();

  modalReference : NgbModalRef;


  constructor(private _employeeService: EmployeeService, private modalService: NgbModal) { }


  ngOnInit(): void {
  }

  clickOnValider() : void {
    this.modalReference.close();
    this._employeeService.deleteEmployee(this.employeeToDelete.id).subscribe(data => console.log(data));
    this.removeFromTable.emit(this.employeeToDelete);
  }
  open(content :any) {
   this.modalReference= this.modalService.open(content, {ariaLabelledBy: 'deleteWarning'});
  }
}
