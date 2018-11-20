/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { StateService } from '../../services/state.service';
import { Employee } from './../../models/employee.model';

@Component(
{
	selector: 'employeeregistration',
	templateUrl: 'employeeregistration.component.html'
})
export class EmployeeregistrationComponent implements OnInit {
	employee: Employee;
	genderId_Data:any;
	stateId_Data:any;
	successMsgData:any[]=[];
	
	constructor(private employeeService: EmployeeService, private stateService: StateService, private router: Router) {
		this.employee = new Employee();
	    this.genderId_Data=[{"genderId":"1","gender":"female"},{"genderId":"2","gender":"male"}];
		this.stateId_Data=[];
	}
	ngOnInit() {
	}
	
	onSingleSelect_countryId(eventData:any) { 
		this.findbycountryid(eventData);
	}
	private findbycountryid(eventData: any) {
	  this.stateService.findbycountryid(this.employee.countryId, this.bindResponseForFindbycountryid_Zjz.bind(this), () => {});
	}
	private bindResponseForFindbycountryid_Zjz(response: any) {
		this.stateId_Data=response.response;
	}
	 
	onClick_save(eventData:any) { 
		this.save(eventData);
	}
	private save(eventData: any) {
		
	  this.employeeService.save(this.employee, this.bindResponseForSave_lFY.bind(this), () => {});
	}
	private bindResponseForSave_lFY(response: any) {
		this.successMsgData.push('Saved successfully!');
		
	}
	 
}

