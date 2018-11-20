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
import { Responsebean } from '../models/responsebean.model';

@Injectable()
export class StateService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public findbycountryid(id: String, onSuccess: (data: Responsebean) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Responsebean>(CORE_SERVICE_URL.STATE  +  '/findbycountryid/'+id),  onSuccess, onFailure);
	}
}

