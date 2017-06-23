import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {rolemaintain} from './rolemaintain';
import {rolemaintainService} from './rolemaintain.service';


@Component({
    templateUrl: 'rolemaintain.component.html',
	selector:'rolemaintain',
	styleUrls:['./rolemaintain.css']
    
})


export class rolemaintainComponent implements OnInit{
	displayDialog: boolean;
    ngid:any;;
    totalRecords: number;
	dcard:Array<any>=[];
	http:Http;

    car: rolemaintain = new PrimeCar();

    
    selectedCar: rolemaintain;


    newCar: boolean;

    cars: rolemaintain[];
	
	test1: any;
	test:any;
	
	cols:any;
    cols1:any;
	columnOptions:any;
    columnOptions1:any;
	errorMessage: string;

    constructor(private carService: rolemaintainService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
		this.carService.getCarsBig().then(test => this.test = test);							 
		
		/*this.carService.gettest()
                       .subscribe(
                       test => this.test1 = test,
                       error =>  this.errorMessage = <any>error);*/
					   
		/* this.http.get('../test.json')
                .subscribe(res => this.test1 = res.json());*/
					   
		console.log(this.test1);

		this.cols = [
            {field: 'id', header: 'id'},
            {field: 'name', header: 'name'}
           
        ];
        this.cols1 = [
            {field: 'subid', header: 'subid'},
        ];
        this.columnOptions = [];
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
         this.columnOptions1 = [];
        for(let i = 0; i < this.cols1.length; i++) {
            this.columnOptions1.push({label: this.cols1[i].header, value: this.cols1[i]});
        }
    }
	
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    showDialogToAdd1() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = false;
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
		this.carService.getCarsBig().then(dcard => this.dcard = dcard);
		alert(this.cars[this.findSelectedCarIndex()].id);
        this.displayDialog = true;
    }
    
    cloneCar(c: rolemaintain): rolemaintain {
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

class PrimeCar implements rolemaintain {
    
    constructor(public id?, public name?,public subid?) {}
}



