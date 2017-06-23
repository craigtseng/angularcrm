import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CrmSchedule} from './CrmSchedule.model';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class CrmScheduleService {
    
    constructor(private http: Http) {}

    getEvents(): Promise<CrmSchedule[]> {
        return this.http.get('api/DataSchedule')
                    .toPromise()
                    .then(response => response.json().data as CrmSchedule[])
                    .then(DataSchedule => { return DataSchedule; });
    }
}