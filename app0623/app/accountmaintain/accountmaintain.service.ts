import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {accountmaintain} from './accountmaintain';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class accountmaintainService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<accountmaintain[]> {
        return this.http.get('api/Dataaccountmaintain')
                    .toPromise()
                    .then(response => response.json().data as accountmaintain[])
                    .then(data => { return data; });
    }
    getAtGroup(): Promise<any[]> {
        return this.http.get('api/DataAtGroup')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(DataAtGroup => { return DataAtGroup; });
    }
    getAtRole(): Promise<any[]> {
        return this.http.get('api/DataAtRole')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(DataAtRole => { return DataAtRole; });
    }
    getAtLog(): Promise<any[]> {
        return this.http.get('api/DataAtLog')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(DataAtLog => { return DataAtLog; });
    }
}