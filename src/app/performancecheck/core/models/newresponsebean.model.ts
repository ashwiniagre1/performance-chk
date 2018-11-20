/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
import { Stateinfo } from './stateinfo.model';
export class Newresponsebean
{
	
	success: boolean;
	message: string;
	response: Stateinfo[]; 
	
	constructor() { 
		this.response = []; 
	}
	
	set setSuccess(value: boolean) {
		this.success = value;
	}
	get getSuccess() : boolean {
		return this.success;
	}
	set setMessage(value: string) {
		this.message = value;
	}
	get getMessage() : string {
		return this.message;
	}
	
}
