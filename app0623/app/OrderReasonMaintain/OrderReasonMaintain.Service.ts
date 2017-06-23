import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {OrderReasonMaintain} from './OrderReasonMaintain';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class OrderReasonMaintainService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<OrderReasonMaintain[]> {
        return this.http.get('api/DataOrderReasonMaintain')
                    .toPromise()
                    .then(response => response.json().data as OrderReasonMaintain[])
                    .then(data => { return data; });
    }
}