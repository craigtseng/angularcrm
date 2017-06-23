import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CrmBusinessMaintenanceHistory} from './CrmBusinessMaintenanceHistory.model';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class CrmBusinessMaintenanceHistoryService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<CrmBusinessMaintenanceHistory[]> {
        return this.http.get('api/DataBusinessMaintenanceHistory')
                    .toPromise()
                    .then(response => response.json().data as CrmBusinessMaintenanceHistory[])
                    .then(DataBusinessMaintenanceHistory => { return DataBusinessMaintenanceHistory; });
    }
}