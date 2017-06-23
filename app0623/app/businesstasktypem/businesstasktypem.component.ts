import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {businesstasktypem} from './businesstasktypem';
import {businesstasktypemService} from './businesstasktypem.service';

import {businesstasktypel} from '../businesstasktypel/businesstasktypel';
import {businesstasktypelService} from '../businesstasktypel/businesstasktypel.service';

@Component({
    templateUrl: 'businesstasktypem.component.html',
	selector:'businesstasktypem',
	styleUrls:['./businesstasktypem.css']
    
})


export class businesstasktypemComponent implements OnInit{
    
	displayDialog: boolean;
   
    totalRecords: number;

    car: businesstasktypem = new PrimeCar();
	//case: businesstasktypel = new PrimeCase();
    
    selectedCar: businesstasktypem;
   // selectedCase: businesstasktypel;

    newCar: boolean;

    cars:businesstasktypem[];
  //  cases:businesstasktypel[];
	cols:any;
	columnOptions:any;

    constructor(private carService: businesstasktypemService,private caseService: businesstasktypelService) { }

    ngOnInit() {
        //this.caseService.getCarsSmall().then(cases => this.cases = cases);
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
    
    cloneCar(c: businesstasktypem): businesstasktypem {
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

class PrimeCar implements businesstasktypem {
    
    constructor(public pkid?, public tasktype1?, public tasktype2?) {}
}
/*class PrimeCase implements businesstasktypel {
    
    constructor(public tasktype?) {}
}*/



