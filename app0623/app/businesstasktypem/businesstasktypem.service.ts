import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {businesstasktypem} from './businesstasktypem';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class businesstasktypemService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<businesstasktypem[]> {
        return this.http.get('api/Datatasktypem')
                    .toPromise()
                    .then(response => response.json().data as businesstasktypem[])
                    .then(data => { return data; });
    }
}