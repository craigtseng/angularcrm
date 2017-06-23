import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CrmExhibitionMaintain} from './CrmExhibitionMaintain.model';
import 'rxjs/add/operator/toPromise';  
 
@Injectable()
export class CrmExhibitionMaintainService {
    
    constructor(private http: Http) {}

    getCarsSmall(): Promise<CrmExhibitionMaintain[]> {
        return this.http.get('api/DatExhibitionMaintain')
                    .toPromise()
                    .then(response => response.json().data as CrmExhibitionMaintain[])
                    .then(DatExhibitionMaintain => { return DatExhibitionMaintain; });
    }
}