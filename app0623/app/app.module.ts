import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { RadioButtonModule,InputTextModule, ButtonModule, TabViewModule, DataTableModule, SharedModule, CalendarModule, DialogModule, MultiSelectModule, TieredMenuModule, PasswordModule,TriStateCheckboxModule}  from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';



import { AuthGuard } from './login/_guards/index';
import { fakeBackendProvider } from './login/_helpers/index';

import { AppComponent }  from './app.component';
import { AlertComponent } from './login/_directives/index';
import { LoginComponent } from './login/index';
import { ForgetComponent } from './forget/index';
import { HomeComponent } from './home/index';
import { testComponent } from './test/index';
import { BlankComponent } from './blank/index';

import { routing }        from './app.routing';
import { HomeRoutingModule } from './home/home-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { LoginService } from './login/login.services';
import { TestService } from './test/test.service';
import { HomeService } from './home/home.service';
import { AlertService, AuthenticationService, UserService } from './login/_services/index';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { groupmaintainComponent } from './groupmaintain/index';
import { rolemaintainComponent } from './rolemaintain/index';
import { accountmaintainComponent } from './accountmaintain/index';
import { programauthorizationComponent } from './programauthorization/index';
import { changepasswordComponent } from './changepassword/index';
import { errorlogsComponent } from './errorlogs/index';

import { crmcaselevelComponent } from './crmcaselevel/index';
import { OrderReasonMaintainComponent } from './OrderReasonMaintain/index';
import { caselossComponent } from './caseloss/index';
import { casedifferencepriceComponent } from './casedifferenceprice/index';
import { businesscustrequestComponent } from './businesscustrequest/index';
import { businessresulttypeComponent } from './businessresulttype/index';
import { businessproblemComponent } from './businessproblem/index';
import { businesslostorderComponent } from './businesslostorder/index';
import { businesstasktypelComponent } from './businesstasktypel/index';
import { businesstasktypemComponent } from './businesstasktypem/index';
import { businesstasktypesComponent } from './businesstasktypes/index';
import { exhibitionworkstatusComponent } from './exhibitionworkstatus/index';

import { CrmCustomerMaintainProgramComponent } from './CrmCustomerMaintainProgram/index';
import { CrmCaseMaintainProgramComponent } from './CrmCaseMaintainProgram/index';
import { CrmBusinessMaintenanceHistoryComponent } from './CrmBusinessMaintenanceHistory/index';
import { CrmScheduleComponent } from './CrmSchedule/index';
import { CrmExhibitionMaintainComponent } from './CrmExhibitionMaintain/index';
import { CrmExhibitionReportComponent } from './CrmExhibitionReport/index';



import { groupmaintainService } from './groupmaintain/groupmaintain.service';
import { rolemaintainService } from './rolemaintain/rolemaintain.service';
import { accountmaintainService } from './accountmaintain/accountmaintain.service';
import { programauthorizationService } from './programauthorization/programauthorization.service';
import { changepasswordService } from './changepassword/changepassword.service';
import { errorlogsService } from './errorlogs/errorlogs.service';
import {CrmCaseLevelService} from './crmcaselevel/CrmCaseLevelService';
import { OrderReasonMaintainService} from './OrderReasonMaintain/OrderReasonMaintain.Service';
import { CaseLossService} from './caseloss/caseloss.service';
import { casedifferencepriceService} from './casedifferenceprice/casedifferenceprice.service';
import { businesscustrequestService } from './businesscustrequest/businesscustrequest.service';
import { businessresulttypeService } from './businessresulttype/businessresulttype.service';
import { businessproblemService } from './businessproblem/businessproblem.service';
import { businesslostorderService } from './businesslostorder/businesslostorder.service';
import { businesstasktypelService } from './businesstasktypel/businesstasktypel.service';
import { businesstasktypemService } from './businesstasktypem/businesstasktypem.service';
import { businesstasktypesService } from './businesstasktypes/businesstasktypes.service';
import { exhibitionworkstatusService } from './exhibitionworkstatus/exhibitionworkstatus.service';
import { CrmCustomerMaintainProgramService } from './CrmCustomerMaintainProgram/CrmCustomerMaintainProgram.service';
import { CrmCaseMaintainProgramService } from './CrmCaseMaintainProgram/CrmCaseMaintainProgram.service';
import { CrmBusinessMaintenanceHistoryService } from './CrmBusinessMaintenanceHistory/CrmBusinessMaintenanceHistory.service';
import { CrmScheduleService } from './CrmSchedule/CrmSchedule.service';
import { CrmExhibitionMaintainService } from './CrmExhibitionMaintain/CrmExhibitionMaintain.service';
import { CrmExhibitionReportService } from './CrmExhibitionReport/CrmExhibitionReport.service';




@NgModule({
    imports: [
        BrowserModule,
		BrowserAnimationsModule,
        FormsModule,
        HttpModule,
		
		InputTextModule, 
		ButtonModule,
		DataTableModule,
		SharedModule,
		CalendarModule,
		DialogModule,
		MultiSelectModule,
		TieredMenuModule,
		TabViewModule,
		PasswordModule,
		TriStateCheckboxModule,
        RadioButtonModule,
		ScheduleModule,
		CheckboxModule,
		GrowlModule,
		
		HomeRoutingModule,
        routing, 
     
		//InMemoryWebApiModule.forRoot(InMemoryDataService),
		InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true ,delay:0})
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
		ForgetComponent,
		HomeComponent,
        BlankComponent,
        testComponent,
		
		groupmaintainComponent,
        rolemaintainComponent,
        accountmaintainComponent,
        programauthorizationComponent,
        changepasswordComponent,
        errorlogsComponent,
		
        crmcaselevelComponent,
		OrderReasonMaintainComponent,
        caselossComponent,
        casedifferencepriceComponent,
        businesscustrequestComponent,
        businessresulttypeComponent,
        businessproblemComponent,
        businesslostorderComponent,
        businesstasktypelComponent,
        businesstasktypemComponent,
        businesstasktypesComponent,
        exhibitionworkstatusComponent,
        CrmCustomerMaintainProgramComponent,
        CrmCaseMaintainProgramComponent,
        CrmBusinessMaintenanceHistoryComponent,
		CrmScheduleComponent,
		CrmExhibitionMaintainComponent,
		CrmExhibitionReportComponent,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
		HomeService,
		TestService,
		LoginService,
		
		groupmaintainService,
        rolemaintainService,
        accountmaintainService,
        programauthorizationService,
        changepasswordService,
        errorlogsService,
		
        CrmCaseLevelService,
        OrderReasonMaintainService,
        CaseLossService,
        casedifferencepriceService,
        businesscustrequestService,
        businessresulttypeService,
        businessproblemService,
        businesslostorderService,
        businesstasktypelService,
        businesstasktypemService,
        businesstasktypesService,
        exhibitionworkstatusService,
		
        CrmCustomerMaintainProgramService,
        CrmCaseMaintainProgramService,
		CrmBusinessMaintenanceHistoryService,
		CrmScheduleService,
		CrmExhibitionMaintainService,
		CrmExhibitionReportService,
    ],
	
    bootstrap: [AppComponent]
})

export class AppModule { }