import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {programauthorization} from './programauthorization';
import {programauthorizationService} from './programauthorization.service';


@Component({
    templateUrl: 'programauthorization.component.html',
	selector:'programauthorization',
	styleUrls:['./programauthorization.css']
    
})


export class programauthorizationComponent implements OnInit{
    
	displayDialog: boolean;
    displayDialoga: boolean;

    totalRecords: number;

    car: programauthorization = new PrimeCar();
	//case: businesstasktypel = new PrimeCase();
    
    selectedCar: programauthorization;
   // selectedCase: businesstasktypel;

    newCar: boolean;

    cars: programauthorization[];
  //  cases:businesstasktypel[];
	cols:any;
    cols1:any;
    cols2:any;
    cols3:any;
	columnOptions:any;
    columnOptions1:any;
    columnOptions2:any;
    columnOptions3:any;


    constructor(private carService: programauthorizationService,private caseService: programauthorizationService) { }

    ngOnInit() {
        //this.caseService.getCarsSmall().then(cases => this.cases = cases);
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	   

		this.cols = [
            {field: 'id', header: 'id'},
            {field: 'name', header: 'name'},
           
           
        ];
        this.cols1 = [
            {field: 'groupid', header: 'groupid'},
            {field: 'groupname', header: 'groupname'}
        ];
         this.cols2 = [
            {field: 'isDefault', header: 'isDefault'},
            {field: 'roleid', header: 'roleid'},
            {field: 'rname', header: 'rname'},
            {field: 'dname', header: 'dname'}
        ];
         this.cols3 = [
            {field: 'issucessful', header: 'issucessful'},
            {field: 'loginip', header: 'loginip'},
            {field: 'logindate', header: 'logindate'},
        ];
        this.columnOptions = [];
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
         this.columnOptions1 = [];
        for(let i = 0; i < this.cols1.length; i++) {
            this.columnOptions1.push({label: this.cols1[i].header, value: this.cols1[i]});
        }
        this.columnOptions2 = [];
        for(let i = 0; i < this.cols2.length; i++) {
            this.columnOptions2.push({label: this.cols2[i].header, value: this.cols2[i]});
        }
         this.columnOptions3 = [];
        for(let i = 0; i < this.cols3.length; i++) {
            this.columnOptions3.push({label: this.cols3[i].header, value: this.cols3[i]});
        }
    }
	
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    showDialogToAdd1() {
       
        this.displayDialoga = true;
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
    
    cloneCar(c: programauthorization): programauthorization {
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
 
class PrimeCar implements programauthorization {
    
    constructor(public id?, public name?,public  userid?,public password?,public disabled?,public activeStartDate?,public  activeEndDate?,
    public email?,public groupid?,public groupname?,public isDefault?,public roleid?,public rname?,public dname?,public issucessful?,public loginip?,public logindate?) {}
}
/*class PrimeCase implements businesstasktypel {
    
    constructor(public tasktype?) {}
}*/



