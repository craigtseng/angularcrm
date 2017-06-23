import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {groupmaintain} from './groupmaintain';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class groupmaintainService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<groupmaintain[]> {
        return this.http.get('api/Datagroupmaintain')
                    .toPromise()
                    .then(response => response.json().data as groupmaintain[])
                    .then(data => { return data; });
    }
    getSub(): Promise<any[]> {
        return this.http.get('api/DataSubGroup')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(data => { return data; });
    }
}