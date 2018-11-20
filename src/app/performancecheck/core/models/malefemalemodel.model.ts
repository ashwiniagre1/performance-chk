/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
export class Malefemalemodel
{
	
	genderid: string;
	year: string;
	
	constructor() { 
	}
	
	set setGenderid(value: string) {
		this.genderid = value;
	}
	get getGenderid() : string {
		return this.genderid;
	}
	set setYear(value: string) {
		this.year = value;
	}
	get getYear() : string {
		return this.year;
	}
	
}
