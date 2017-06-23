import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {businesslostorder} from './businesslostorder';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class businesslostorderService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<businesslostorder[]> {
        return this.http.get('api/Datalostorder')
                    .toPromise()
                    .then(response => response.json().data as businesslostorder[])
                    .then(data => { return data; });
    }
}