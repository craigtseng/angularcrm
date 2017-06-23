import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {businesscustrequest} from './businesscustrequest';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class businesscustrequestService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<businesscustrequest[]> {
        return this.http.get('api/Databusinesscustrequest')
                    .toPromise()
                    .then(response => response.json().data as businesscustrequest[])
                    .then(data => { return data; });
    }
}