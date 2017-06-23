import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {rolemaintain} from './rolemaintain';
import 'rxjs/add/operator/toPromise';  
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class rolemaintainService {

    constructor(private http: Http) {}

    getCarsSmall(): Promise<rolemaintain[]> {
        return this.http.get('api/Datarolemaintain')
                    .toPromise()
                    .then(response => response.json().data as rolemaintain[])
                    .then(data => { return data; });
    }
	 getCarsBig(): Promise<any[]> {
        return this.http.get('api/Datarolemaintain')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(data => { return data; });
    }
	
	 gettest(): Observable<any[]> {
        return this.http.get('123')
					.map(res => <any[]> res.json())
                    .do(data => console.log(data)) 
                    .catch(this.handleError);
    }
	
	 private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
  }
	
}
