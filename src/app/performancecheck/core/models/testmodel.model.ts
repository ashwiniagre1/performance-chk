/**
 * Created by: deepali arvind
 * Date: 19/11/2018
 * Organization: Individual	
 */
export class Testmodel
{
	
	gender: string;
	test: string;
	
	constructor() { 
	}
	
	set setGender(value: string) {
		this.gender = value;
	}
	get getGender() : string {
		return this.gender;
	}
	set setTest(value: string) {
		this.test = value;
	}
	get getTest() : string {
		return this.test;
	}
	
}
