/**
 * Created by: deepali arvind
 * Date: 19/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component(
{
	selector: 'departmentlist',
	templateUrl: 'departmentlist.component.html'
})
export class DepartmentlistComponent implements OnInit {
	successMsgData:any[]=[];
	
	constructor( private router: Router) {
	}
	ngOnInit() {
	}
	
	onClick_btmn(eventData:any) { 
		this.router.navigate(['performancecheck/core/department']);
		
	} 
}

