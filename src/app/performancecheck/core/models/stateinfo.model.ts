/**
 * Created by: deepali arvind
 * Date: 20/11/2018
 * Organization: Individual	
 */
export class Stateinfo
{
	
	stateName: string;
	birthCount: number;
	
	constructor() { 
	}
	
	set setStateName(value: string) {
		this.stateName = value;
	}
	get getStateName() : string {
		return this.stateName;
	}
	set setBirthCount(value: number) {
		this.birthCount = value;
	}
	get getBirthCount() : number {
		return this.birthCount;
	}
	
}
