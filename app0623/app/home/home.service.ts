import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise'; 
import {Observable} from 'rxjs/Rx'; 


import {MenuItem} from 'primeng/primeng';
import { rule } from './rule'

 
@Injectable()
export class HomeService {
    
    constructor(private http: Http) {}

    getMenu(): Promise<MenuItem[]> {
        return this.http.get('api/DataMenu')
                    .toPromise()
                    .then(response => response.json().data as MenuItem[])
                    .then(DataMenu => { return DataMenu; });
    }
	getrule(): Observable<rule[]> {
      
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let	body=
		{				
			"cmd":"hiwin/test/test"			
		}				

		
		let Url = 'api/DataUserroles';		
		
		return this.http.get('api/DataUserroles').map((res:Response) => res.json().data);
    }

	getmenutest(): Observable<MenuItem[]> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let	body=
		{				
			"cmd":"hiwin/test/test"			
		}				
		let Url = 'api/DataMenutest';		
		
		return this.http.get('api/DataMenutest').map((res:Response) => res.json().data);
		
	}
	
	
	getUsers(): Observable<Response> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let	body=
		{				
			"cmd":"hiwin/test/test"			
		}				

		
		let Url = 'http://10.177.25.60:8081/hiwin_web/api';		
		
		return this.http.post(Url,body,options).map((res:Response) => res.json().response);
		
	}
	
	getTest(): Observable<MenuItem[]> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let	body=
		{				
			"cmd":"hiwin/test/test"			
		}				
		let Url = 'api/DataMenu';		
		
		return this.http.get('api/DataMenu').map((res:Response) => res.json().data);
		
	}
}