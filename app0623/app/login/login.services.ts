import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {

    constructor(private http:Http) {}

	getUsers(): Observable<Response> {
        return this.http.get('/api/DataUsers').map((res:Response) => res.json().data);
    }
}
