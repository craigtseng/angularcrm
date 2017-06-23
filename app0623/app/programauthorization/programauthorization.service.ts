import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {programauthorization} from './programauthorization';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class programauthorizationService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<programauthorization[]> {
        return this.http.get('api/Dataprogramauthorization')
                    .toPromise()
                    .then(response => response.json().data as programauthorization[])
                    .then(data => { return data; });
    }
}