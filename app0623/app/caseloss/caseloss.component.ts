import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {caseloss} from './caseloss';
import {CaseLossService} from './caseloss.service';

@Component({
    templateUrl: 'caseloss.component.html',
	selector:'caseloss',
	styleUrls:['./caseloss.css']
    
})


export class caselossComponent implements OnInit{
    
	displayDialog: boolean;
   
    totalRecords: number;

    car: caseloss = new PrimeCar();
	
    
    selectedCar: caseloss;
    
    newCar: boolean;

    cars: caseloss[];
	cols:any;
	columnOptions:any;

    constructor(private carService: CaseLossService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	

		this.cols = [
            {field: 'failName', header: 'failName'}
           
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
    
    cloneCar(c: caseloss): caseloss {
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

class PrimeCar implements caseloss {
    
    constructor(public pkid?,public failName?) {}
}



