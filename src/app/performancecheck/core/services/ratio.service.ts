/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
import { HttpClient } from '@angular/common/http';
import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CORE_SERVICE_URL } from './core.service.constant';
import { Newresponsebean } from '../models/newresponsebean.model';

@Injectable()
export class RatioService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public female(year: String, onSuccess: (data: Newresponsebean) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Newresponsebean>(CORE_SERVICE_URL.RATIO  +  '/female/'+year),  onSuccess, onFailure);
	}
	public male(year: String, onSuccess: (data: Newresponsebean) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Newresponsebean>(CORE_SERVICE_URL.RATIO  +  '/male/'+year),  onSuccess, onFailure);
	}
}

