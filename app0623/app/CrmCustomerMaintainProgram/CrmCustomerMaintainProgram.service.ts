import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CrmCustomerMaintainProgram} from './CrmCustomerMaintainProgram.model';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class CrmCustomerMaintainProgramService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<CrmCustomerMaintainProgramService[]> {
        return this.http.get('api/DataCustomerMaintainProgram')
                    .toPromise()
                    .then(response => response.json().data as CrmCustomerMaintainProgramService[])
                    .then(DataCaseLeval => { return DataCaseLeval; });
    }
	
	getAddress(): Promise<any[]> {
        return this.http.get('api/DataCustomerAddress')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(Data => { return Data; });
    }
	getPerson(): Promise<any[]> {
        return this.http.get('api/DataCustomerPerson')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(Data => { return Data; });
    }
	getSpecs(): Promise<any[]> {
        return this.http.get('api/DataCustomerSpecs')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(Data => { return Data; });
    }
	
	getPostCode(): Promise<any[]> {
        return this.http.get('api/DataPostCode')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(Data => { return Data; });
    }
}