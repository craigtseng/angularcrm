import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {businesslostorder} from './businesslostorder';
import {businesslostorderService} from './businesslostorder.service';

@Component({
    templateUrl: 'businesslostorder.component.html',
	selector:'businesslostorder',
	styleUrls:['./businesslostorder.css']
    
})


export class businesslostorderComponent implements OnInit{
    
	displayDialog: boolean;
   
    totalRecords: number;

    car: businesslostorder = new PrimeCar();
	
    
    selectedCar: businesslostorder;
    
    newCar: boolean;

    cars:businesslostorder[];
	cols:any;
	columnOptions:any;

    constructor(private carService: businesslostorderService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	

		this.cols = [
            {field: 'lostorder', header: 'lostorder'}
           
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
    
    cloneCar(c: businesslostorder): businesslostorder {
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

class PrimeCar implements businesslostorder {
    
    constructor(public pkid?,public lostorder?) {}
}



