import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentlistComponent } from './components/departmentlist/departmentlist.component';
import { TestuiComponent } from './components/testui/testui.component';
import { EmployeeregistrationComponent } from './components/employeeregistration/employeeregistration.component';
import { TestuiiiComponent } from './components/testuiii/testuiii.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { MalefemalerationComponent } from './components/malefemaleration/malefemaleration.component';
import { DepartmentService } from './services/department.service';
import { CountryService } from './services/country.service';
import { StateService } from './services/state.service';
import { EmployeeService } from './services/employee.service';
import { RatioService } from './services/ratio.service';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	    DepartmentComponent,
	    DepartmentlistComponent,
	    TestuiComponent,
	    EmployeeregistrationComponent,
	    TestuiiiComponent,
	    EmployeelistComponent,
	    MalefemalerationComponent,
	  ],
	  providers: [
	    DepartmentService,
	    CountryService,
	    StateService,
	    EmployeeService,
	    RatioService,
	  ]
})
export class CoreModule {
}
