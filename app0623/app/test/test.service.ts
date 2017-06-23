import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise'; 
import {Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx'; 
    
@Injectable()
export class TestService {
    
    constructor(private http: Http) {}

    getCarsSmall(){		
	    return this.http.get('/api/DataCaseGwSeries')
				   .map(res =><any[]> res.json() as any[]);
    }
	
	getCars(){
        return this.http.get('/api/DataCaseGwSeries')
                    .toPromise()
                    .then(response =>response.json().data as any[])
                    .then(data => { return data; });
    }
	
	 deleteFood() {
        return this.http.delete('/api/DataCaseGwSeries/1');
    }
	
	gettest(): Observable<any[]> {
        return this.http.get('/api/DataCaseGwSeries')
					.map(response => <any[]> response.json().data)
                    ; 
                   
    }
}
 