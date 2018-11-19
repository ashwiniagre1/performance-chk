/**
 * Created by: deepali arvind
 * Date: 19/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from './../../models/department.model';

@Component(
{
	selector: 'department',
	templateUrl: 'department.component.html'
})
export class DepartmentComponent implements OnInit {
	department: Department;
	successMsgData:any[]=[];
	
	constructor(private departmentService: DepartmentService, private router: Router) {
		this.department = new Department();
	}
	ngOnInit() {
	}
	
	onClick_save(eventData:any) { 
		this.save(eventData);
	}
	private save(eventData: any) {
		
	  this.departmentService.save(this.department, this.bindResponseForSave_Ixp.bind(this), () => {});
	}
	private bindResponseForSave_Ixp(response: any) {
		this.successMsgData.push(response.name+' '+'saved successfully !');
		
	}
	 
}

