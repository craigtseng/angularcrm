import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {errorlogs} from './errorlogs';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class errorlogsService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<errorlogs[]> {
        return this.http.get('api/Dataerrorlogs')
                    .toPromise()
                    .then(response => response.json().data as errorlogs[])
                    .then(data => { return data; });
    }
}