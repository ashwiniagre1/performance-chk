/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { Testmodelone } from './../../models/testmodelone.model';

@Component(
{
	selector: 'testuiii',
	templateUrl: 'testuiii.component.html'
})
export class TestuiiiComponent implements OnInit {
	testmodelone: Testmodelone;
	stateId_Data:any;
	successMsgData:any[]=[];
	
	constructor(private stateService: StateService, private router: Router) {
		this.testmodelone = new Testmodelone();
		this.stateId_Data=[];
	}
	ngOnInit() {
	}
	
	onSingleSelect_countryid(eventData:any) { 
		this.findbycountryid(eventData);
	}
	private findbycountryid(eventData: any) {
	  this.stateService.findbycountryid(this.testmodelone.countryid, this.bindResponseForFindbycountryid_tZK.bind(this), () => {});
	}
	private bindResponseForFindbycountryid_tZK(response: any) {
		this.testmodelone.stateId=response.response;
	}
	 
}

