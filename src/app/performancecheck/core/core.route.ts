
import {Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentlistComponent } from './components/departmentlist/departmentlist.component';
import { TestuiComponent } from './components/testui/testui.component';
import { EmployeeregistrationComponent } from './components/employeeregistration/employeeregistration.component';
import { TestuiiiComponent } from './components/testuiii/testuiii.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { MalefemalerationComponent } from './components/malefemaleration/malefemaleration.component';
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
{
	    path: 'employee-registration', component: EmployeeregistrationComponent
},
{
	    path: 'testuiii', component: TestuiiiComponent
},
{
	    path: 'employee-list', component: EmployeelistComponent
},
{
	    path: 'male-female-ration', component: MalefemalerationComponent
},
];

