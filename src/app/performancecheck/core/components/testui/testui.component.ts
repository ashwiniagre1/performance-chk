/**
 * Created by: deepali arvind
 * Date: 19/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Testmodel } from './../../models/testmodel.model';

@Component(
{
	selector: 'testui',
	templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit {
	testmodel: Testmodel;
	gender_Data:any;
	successMsgData:any[]=[];
	
	constructor( private router: Router) {
		this.testmodel = new Testmodel();
	    this.gender_Data={"data":[{"gender":"female","genderId":"1"},{"gender":"male","genderId":"2"}]};
	}
	ngOnInit() {
	}
	
	onSelection_gender(eventData:any) { 
		this.testmodel.test=this.testmodel.gender;
		
	} 
}

