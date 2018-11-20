/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
export class Testmodelone
{
	
	countryid: string;
	stateId: string;
	
	constructor() { 
	}
	
	set setCountryid(value: string) {
		this.countryid = value;
	}
	get getCountryid() : string {
		return this.countryid;
	}
	set setStateId(value: string) {
		this.stateId = value;
	}
	get getStateId() : string {
		return this.stateId;
	}
	
}
