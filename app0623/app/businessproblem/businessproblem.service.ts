import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {businessproblem} from './businessproblem';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class businessproblemService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<businessproblem[]> {
        return this.http.get('api/Dataproblemstype')
                    .toPromise()
                    .then(response => response.json().data as businessproblem[])
                    .then(data => { return data; });
    }
}