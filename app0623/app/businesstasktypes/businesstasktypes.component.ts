import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {businesstasktypes} from './businesstasktypes';
import {businesstasktypesService} from './businesstasktypes.service';

@Component({
    templateUrl: 'businesstasktypes.component.html',
	selector:'businesstasktypes',
	styleUrls:['./businesstasktypes.css']
    
})


export class businesstasktypesComponent implements OnInit{
    
	displayDialog: boolean;
   
    totalRecords: number;

    car: businesstasktypes = new PrimeCar();
	
    
    selectedCar: businesstasktypes;
    
    newCar: boolean;

    cars:businesstasktypes[];
	cols:any;
	columnOptions:any;

    constructor(private carService: businesstasktypesService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	

		this.cols = [
            {field: 'tasktype1', header: 'tasktype1'},
            {field: 'tasktype2', header: 'tasktype2'}
           
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
        this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: businesstasktypes): businesstasktypes {
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

class PrimeCar implements businesstasktypes {
    
    constructor(public pkid?,public tasktype1?,public tasktype2?) {}
}



