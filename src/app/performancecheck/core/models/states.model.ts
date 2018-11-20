/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
export class States
{
	
	stateId: string;
	countrId: string;
	stateName: string;
	countryName: string;
	
	constructor() { 
	}
	
	set setStateId(value: string) {
		this.stateId = value;
	}
	get getStateId() : string {
		return this.stateId;
	}
	set setCountrId(value: string) {
		this.countrId = value;
	}
	get getCountrId() : string {
		return this.countrId;
	}
	set setStateName(value: string) {
		this.stateName = value;
	}
	get getStateName() : string {
		return this.stateName;
	}
	set setCountryName(value: string) {
		this.countryName = value;
	}
	get getCountryName() : string {
		return this.countryName;
	}
	
}
