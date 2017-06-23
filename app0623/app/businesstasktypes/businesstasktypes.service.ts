import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {businesstasktypes} from './businesstasktypes';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class businesstasktypesService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<businesstasktypes[]> {
        return this.http.get('api/Datatasktypes')
                    .toPromise()
                    .then(response => response.json().data as businesstasktypes[])
                    .then(data => { return data; });
    }
}