/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RatioService } from '../../services/ratio.service';
import { Malefemalemodel } from './../../models/malefemalemodel.model';

@Component(
{
	selector: 'malefemaleration',
	templateUrl: 'malefemaleration.component.html'
})
export class MalefemalerationComponent implements OnInit {
	malefemalemodel: Malefemalemodel;
	genderid_Data:any;
	year_Data:any;
	grid_Data:any;
	successMsgData:any[]=[];
	
	constructor(private ratioService: RatioService, private router: Router) {
		this.malefemalemodel = new Malefemalemodel();
	    this.genderid_Data={"data":[{"genderid":"1","gender":"female"},{"genderid":"2","gender":"male"}]};
	    this.year_Data={"data":[{"year":"2010","yearid":"2010"},{"year":"2011","yearid":"2011"},{"year":"2012","yearid":"2012"},{"year":"2013","yearid":"2013"}]};
		this.grid_Data=[];
	}
	ngOnInit() {
	}
	
	onClick_btn(eventData:any) { 
		if(this.malefemalemodel.genderid ==  '1') {
		  this.ratioService.female(this.malefemalemodel.year, this.bindResponseForBtn_tUD.bind(this), () => {});
		}else if(this.malefemalemodel.genderid ==  '2') {
		  this.ratioService.male(this.malefemalemodel.year, this.bindResponseForBtn_yhi.bind(this), () => {});
		}
	}
	private bindResponseForBtn_tUD(response: any) {
	this.grid_Data=response.response;}
	private bindResponseForBtn_yhi(response: any) {
		this.grid_Data=response.response;
	} 
}

