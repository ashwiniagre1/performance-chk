/**
 * Created by: deepali arvind
 * Date: 19/11/2018
 * Organization: Individual	
 */
export class Country
{
	
	id: string;
	countryName: string;
	countryCode: string;
	currencyName: string;
	
	constructor() { 
	}
	
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setCountryName(value: string) {
		this.countryName = value;
	}
	get getCountryName() : string {
		return this.countryName;
	}
	set setCountryCode(value: string) {
		this.countryCode = value;
	}
	get getCountryCode() : string {
		return this.countryCode;
	}
	set setCurrencyName(value: string) {
		this.currencyName = value;
	}
	get getCurrencyName() : string {
		return this.currencyName;
	}
	
}
