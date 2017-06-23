import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {caseloss} from './caseloss';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class CaseLossService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<caseloss[]> {
        return this.http.get('api/Datacaseloss')
                    .toPromise()
                    .then(response => response.json().data as caseloss[])
                    .then(data => { return data; });
    }
}