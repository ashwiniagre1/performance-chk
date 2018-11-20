import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
constructor(private _router : Router) {    
 this.sideNavMenu = [{"text":"Department","expand":false,"id":null,"leaf":false,"icon":"fa fa-building","routerLink":null,"children":[{"text":"Department","expand":false,"id":"738ef75d-c10a-4503-bf98-a16f3051eae4","leaf":true,"icon":"fa fa-shopping-bag","routerLink":"performancecheck/core/department","children":null},{"text":"Department  list","expand":false,"id":"3e44f46d-b092-4a54-acb8-49062c88e6fa","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancecheck/core/department--list","children":null},{"text":"testui","expand":false,"id":"a041782c-2c5d-47c9-99ea-6dac7def7933","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancecheck/core/testui","children":null},{"text":"testuiii","expand":false,"id":"7afd8eb4-91b6-4b47-bb26-2e4a99dc8fc7","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancecheck/core/testuiii","children":null}]},{"text":"Employee","expand":false,"id":null,"leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"Employee Registration","expand":false,"id":"c3911270-48ac-4b59-b016-216220f4d179","leaf":true,"icon":"fa fa-user","routerLink":"performancecheck/core/employee-registration","children":null},{"text":"Employee List","expand":false,"id":"1b3550df-ba02-4a19-967e-b507f5f16e7f","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancecheck/core/employee-list","children":null}]},{"text":"Ratio","expand":false,"id":null,"leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"male-female ration","expand":false,"id":"6841dc1e-1851-4949-bed5-c767c65d44f3","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancecheck/core/male-female-ration","children":null}]}]; }
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }
}
