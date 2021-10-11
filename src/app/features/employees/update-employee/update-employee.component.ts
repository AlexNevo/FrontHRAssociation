import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  modalReference : NgbModalRef;


  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content:any){
    this.modalReference= this.modalService.open(content, {ariaLabelledBy: 'deleteWarning'});
  }
}
