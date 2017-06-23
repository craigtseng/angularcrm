import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {exhibitionworkstatus} from './exhibitionworkstatus';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class exhibitionworkstatusService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<exhibitionworkstatus[]> {
        return this.http.get('api/Dataworkstatus')
                    .toPromise()
                    .then(response => response.json().data as exhibitionworkstatus[])
                    .then(data => { return data; });
    }
}