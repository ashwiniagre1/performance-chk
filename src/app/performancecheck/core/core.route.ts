
import {Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentlistComponent } from './components/departmentlist/departmentlist.component';
import { TestuiComponent } from './components/testui/testui.component';
export const ROUTES: Routes = [
{
	    path: 'department', component: DepartmentComponent
},
{
	    path: 'department--list', component: DepartmentlistComponent
},
{
	    path: 'testui', component: TestuiComponent
},
];

