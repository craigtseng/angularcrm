import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {casedifferenceprice} from './casedifferenceprice';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class casedifferencepriceService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<casedifferenceprice[]> {
        return this.http.get('api/Datacasedifferenceprice')
                    .toPromise()
                    .then(response => response.json().data as casedifferenceprice[])
                    .then(data => { return data; });
    }
}