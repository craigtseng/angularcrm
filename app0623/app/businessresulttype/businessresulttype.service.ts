import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {businessresulttype} from './businessresulttype';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class businessresulttypeService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<businessresulttype[]> {
        return this.http.get('api/Databusinessresulttype')
                    .toPromise()
                    .then(response => response.json().data as businessresulttype[])
                    .then(data => { return data; });
    }
}