import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/_guards/index';

import { HomeComponent } from './index';
import { BlankComponent } from '../blank/index';
import { testComponent } from '../test/index';


import { groupmaintainComponent } from '../groupmaintain/index';
import { rolemaintainComponent } from '../rolemaintain/index';
import { accountmaintainComponent } from '../accountmaintain/index';
import { programauthorizationComponent } from '../programauthorization/index';
import { changepasswordComponent } from '../changepassword/index';
import { errorlogsComponent } from '../errorlogs/index';


import { crmcaselevelComponent } from '../crmcaselevel/index';
import { OrderReasonMaintainComponent } from '../OrderReasonMaintain/index';
import { caselossComponent } from '../caseloss/index';
import { casedifferencepriceComponent } from '../casedifferenceprice/index';
import { businesscustrequestComponent } from '../businesscustrequest/index';
import { businessresulttypeComponent } from '../businessresulttype/index';
import { businessproblemComponent } from '../businessproblem/index';
import { businesslostorderComponent } from '../businesslostorder/index';
import { businesstasktypelComponent } from '../businesstasktypel/index';
import { businesstasktypemComponent } from '../businesstasktypem/index';
import { businesstasktypesComponent } from '../businesstasktypes/index';
import { exhibitionworkstatusComponent } from '../exhibitionworkstatus/index';




import { CrmCustomerMaintainProgramComponent } from '../CrmCustomerMaintainProgram/index';
import { CrmCaseMaintainProgramComponent } from '../CrmCaseMaintainProgram/index';
import { CrmBusinessMaintenanceHistoryComponent } from '../CrmBusinessMaintenanceHistory/index';
import { CrmScheduleComponent } from '../CrmSchedule/index';
import { CrmExhibitionMaintainComponent } from '../CrmExhibitionMaintain/index';
import { CrmExhibitionReportComponent } from '../CrmExhibitionReport/index';

const HomeRoutes: Routes = [
	{path:'' , component:HomeComponent , canActivate: [AuthGuard] , children:[
		{ path: 'blank', component:BlankComponent , canActivate: [AuthGuard]},
		{ path: 'test', component: testComponent , canActivate: [AuthGuard]},
		
		{ path: 'groupmaintain', component: groupmaintainComponent , canActivate: [AuthGuard]},
		{ path: 'rolemaintain', component: rolemaintainComponent , canActivate: [AuthGuard]},
		{ path: 'accountmaintain', component: accountmaintainComponent , canActivate: [AuthGuard]},
		{ path: 'programauthorization', component: programauthorizationComponent , canActivate: [AuthGuard]},
		{ path: 'changepassword', component: changepasswordComponent , canActivate: [AuthGuard]},
		{ path: 'errorlogs', component: errorlogsComponent , canActivate: [AuthGuard]},
		
		
		{ path: 'crmcaselevel', component: crmcaselevelComponent , canActivate: [AuthGuard]},
		{ path: 'OrderReasonMaintain', component: OrderReasonMaintainComponent , canActivate: [AuthGuard]},
		{ path: 'caseloss', component: caselossComponent , canActivate: [AuthGuard]},
		{ path: 'casedifferenceprice', component: casedifferencepriceComponent , canActivate: [AuthGuard]},
		{ path: 'businesscustrequest', component: businesscustrequestComponent , canActivate: [AuthGuard]},
		{ path: 'businessresulttype', component: businessresulttypeComponent , canActivate: [AuthGuard]},
		{ path: 'businessproblem', component: businessproblemComponent , canActivate: [AuthGuard]},
		{ path: 'businesslostorder', component: businesslostorderComponent , canActivate: [AuthGuard]},
	  { path: 'businesstasktypel', component: businesstasktypelComponent , canActivate: [AuthGuard]},
		{ path: 'businesstasktypem', component: businesstasktypemComponent , canActivate: [AuthGuard]},
		{ path: 'businesstasktypes', component: businesstasktypesComponent , canActivate: [AuthGuard]},
		{ path: 'exhibitionworkstatus', component: exhibitionworkstatusComponent , canActivate: [AuthGuard]},
		
		
		{ path: 'CrmCustomerMaintainProgram', component: CrmCustomerMaintainProgramComponent, canActivate: [AuthGuard]},
		{ path: 'CrmCaseMaintainProgram', component: CrmCaseMaintainProgramComponent, canActivate: [AuthGuard]},
		{ path: 'CrmBusinessMaintenanceHistory', component: CrmBusinessMaintenanceHistoryComponent , canActivate: [AuthGuard]},
		{ path: 'CrmSchedule', component: CrmScheduleComponent , canActivate: [AuthGuard]},
		{ path: 'CrmExhibitionMaintain', component: CrmExhibitionMaintainComponent , canActivate: [AuthGuard]},
		{ path: 'CrmExhibitionReport', component: CrmExhibitionReportComponent , canActivate: [AuthGuard]},
	]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}


