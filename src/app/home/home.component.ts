import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
constructor(private _router : Router) {    
 this.sideNavMenu = [{"text":"New Node","expand":false,"id":null,"leaf":false,"icon":"fa fa-building","routerLink":null,"children":[{"text":"Department","expand":false,"id":"738ef75d-c10a-4503-bf98-a16f3051eae4","leaf":true,"icon":"fa fa-shopping-bag","routerLink":"performancecheck/core/department","children":null},{"text":"Department  list","expand":false,"id":"3e44f46d-b092-4a54-acb8-49062c88e6fa","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancecheck/core/department--list","children":null},{"text":"testui","expand":false,"id":"a041782c-2c5d-47c9-99ea-6dac7def7933","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancecheck/core/testui","children":null}]}]; }
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }
}
