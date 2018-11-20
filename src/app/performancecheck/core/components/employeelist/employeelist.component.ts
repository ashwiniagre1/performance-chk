/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component(
{
	selector: 'employeelist',
	templateUrl: 'employeelist.component.html'
})
export class EmployeelistComponent implements OnInit {
	successMsgData:any[]=[];
	
	constructor( private router: Router) {
	}
	ngOnInit() {
	}
	
	onClick_btn(eventData:any) { 
		this.router.navigate(['performancecheck/core/employee-registration']);
		
	} 
}

