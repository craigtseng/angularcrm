import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CrmCaseMaintainProgram} from './CrmCaseMaintainProgram.model';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class CrmCaseMaintainProgramService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<CrmCaseMaintainProgramService[]> {
        return this.http.get('api/DataCaseMaintainProgram')
                    .toPromise()
                    .then(response => response.json().data as CrmCaseMaintainProgramService[])
                    .then(DataCaseLeval => { return DataCaseLeval; });
    }
	getSpecs(): Promise<any[]> {
        return this.http.get('api/DataCaseSpecs')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(Data => { return Data; });
    }
	getGwSeries(): Promise<any[]> {
        return this.http.get('api/DataCaseGwSeries')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(Data => { return Data; });
    }
}