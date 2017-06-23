import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {CrmExhibitionMaintain} from './CrmExhibitionMaintain.model';
import {CrmExhibitionMaintainService} from './CrmExhibitionMaintain.service';

@Component({
    templateUrl: 'CrmExhibitionMaintain.component.html',
	selector:'CrmExhibitionMaintain',
	styleUrls:['./CrmExhibitionMaintain.component.css']
    
})


export class CrmExhibitionMaintainComponent implements OnInit{
    
	displayDialog: boolean;
   
    totalRecords: number;

    car: CrmExhibitionMaintain = new PrimeCar();
	
    
    selectedCar: CrmExhibitionMaintain;
    
    newCar: boolean;

    cars: CrmExhibitionMaintain[];
	cols:any;
	columnOptions:any;

    constructor(private carService: CrmExhibitionMaintainService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	

		this.cols = [
			{field: 'custName', header: 'custName'},
			{field: 'exYear', header: 'exYear'},
			{field: 'exhibition', header: 'exhibition'},
			{field: 'occupier', header: 'occupier'},
			{field: 'postcode', header: 'postcode'},
			{field: 'city', header: 'city'},
			{field: 'address', header: 'address'},
			{field: 'memo', header: 'memo'},
			{field: 'busCategory', header: 'busCategory'},
			{field: 'workStatus', header: 'workStatus'},
			{field: 'CustKind', header: 'CustKind'},
			{field: 'misCustId', header: 'misCustId'},
			{field: 'modifier', header: 'modifier'},
			{field: ' modifierTime', header: ' modifierTime'},
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
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        //this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: CrmExhibitionMaintain): CrmExhibitionMaintain {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

class PrimeCar implements CrmExhibitionMaintain {
    
    constructor(public pkid?,public caseRank?) {}
}



