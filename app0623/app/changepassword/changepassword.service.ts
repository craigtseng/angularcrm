import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {changepassword} from './changepassword';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class changepasswordService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<changepassword[]> {
        return this.http.get('api/Datapassword')
                    .toPromise()
                    .then(response => response.json().data as changepassword[])
                    .then(data => { return data; });
    }
}