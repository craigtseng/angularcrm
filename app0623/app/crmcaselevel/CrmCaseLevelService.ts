import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {crmcaselevel} from './crmcaselevel';
import 'rxjs/add/operator/toPromise';  
import {Observable} from 'rxjs/Rx'; 
import {rule} from '../home/rule'
@Injectable()
export class CrmCaseLevelService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Observable<crmcaselevel[]> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let body=
		{
			
		};
		
		let Url = 'http://10.177.25.60:8081/hiwin_web/api';		
		
		return this.http.get('api/DataCaseLevel')
						.map((res:Response) => res.json().data);
    }
	getItems(): Observable<Response> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let body=
		{
			
		};
		
		let Url = 'http://10.177.25.60:8081/hiwin_web/api';		
		
		return this.http.get('api/ItemCaseLevel')
						.map((res:Response) => res.json().response);
	}
	getcrud(): Observable<crmcaselevel[]> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		let body=
		{
			
		};
		
		let Url = 'api/DataCaseLevelcrud';		
		
		return this.http.get('api/DataCaseLevelcrud')
						.map((res:Response) => res.json().data);
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
}