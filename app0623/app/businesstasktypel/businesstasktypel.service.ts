import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {businesstasktypel} from './businesstasktypel';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class businesstasktypelService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<businesstasktypel[]> {
        return this.http.get('api/Datatasktypel')
                    .toPromise()
                    .then(response => response.json().data as businesstasktypel[])
                    .then(data => { return data; });
    }
}