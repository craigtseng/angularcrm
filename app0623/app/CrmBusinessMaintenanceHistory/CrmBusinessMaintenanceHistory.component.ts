import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {CrmBusinessMaintenanceHistory} from './CrmBusinessMaintenanceHistory.model';
import {CrmBusinessMaintenanceHistoryService} from './CrmBusinessMaintenanceHistory.service';

@Component({
    templateUrl: 'CrmBusinessMaintenanceHistory.component.html',
	selector:'CrmBusinessMaintenanceHistory',
	styleUrls:['./CrmBusinessMaintenanceHistory.component.css']
    
})


export class CrmBusinessMaintenanceHistoryComponent implements OnInit{
    
	displayDialog: boolean;
   
    totalRecords: number;

    car: CrmBusinessMaintenanceHistory = new PrimeCar();
	
    
    selectedCar: CrmBusinessMaintenanceHistory;
    
    newCar: boolean;

    cars: CrmBusinessMaintenanceHistory[];
	cols:any;
	columnOptions:any;

    constructor(private carService: CrmBusinessMaintenanceHistoryService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	

		this.cols = [
			{field: 'cust', header: 'cust'},
			{field: 'crm_case', header: 'crm_case'},
			{field: 'taskDt', header: 'taskDt'},
			{field: 'startTime', header: 'startTime'},
			{field: 'endTime', header: 'endTime'},
			{field: 'taskBigType', header: 'taskBigType'},
			{field: 'taskMediumType', header: 'taskMediumType'},
			{field: 'taskSmallType', header: 'taskSmallType'},
			{field: 'content', header: 'content'},
			{field: 'resultType', header: 'resultType'},
			{field: 'result', header: 'result'},
			{field: 'custRequest', header: 'custRequest'},
			{field: 'lostOrder', header: 'lostOrder'},
			{field: 'lostOrderResult', header: 'lostOrderResult'},
			{field: 'problemsType', header: 'problemsType'},
			{field: 'problems', header: 'problems'},
			{field: 'togetherAgent', header: 'togetherAgent'},

        ];
        
        this.columnOptions = [];
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
    }
	
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        let cars = [...this.cars];
        if(this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
	if(confirm("你確定要刪除資料嗎?")){
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.displayDialog = false;
		}
    }

	cancel(){
	if(confirm("資料尚未儲存，你確定要取消嗎?")){
		this.displayDialog = false;
		}
	}
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: CrmBusinessMaintenanceHistory): CrmBusinessMaintenanceHistory {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
	
	private alert(){
		alert("Are you sure to exit?");
	}
}

class PrimeCar implements CrmBusinessMaintenanceHistory {
    
    constructor(public pkid?,public caseRank?) {}
}



