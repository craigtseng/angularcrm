import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CrmExhibitionReport} from './CrmExhibitionReport.model';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class CrmExhibitionReportService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<CrmExhibitionReport[]> {
        return this.http.get('api/DateExhibitionReport')
                    .toPromise()
                    .then(response => response.json().data as CrmExhibitionReport[])
                    .then(DateExhibitionReport => { return DateExhibitionReport; });
    }
	
    getUser(): Promise<any[]> {
        return this.http.get('api/ReportUser')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(ReportUser => { return ReportUser; });
    }
	
	
    getJob(): Promise<any[]> {
        return this.http.get('api/ReportJob')
                    .toPromise()
                    .then(response => response.json().data as any[])
                    .then(ReportJob => { return ReportJob; });
    }
}