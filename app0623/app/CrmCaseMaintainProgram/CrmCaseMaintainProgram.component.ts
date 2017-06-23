import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {CrmCaseMaintainProgram} from './CrmCaseMaintainProgram.model';
import {CrmCaseMaintainProgramService} from './CrmCaseMaintainProgram.service';

@Component({
    templateUrl: 'CrmCaseMaintainProgram.component.html',
	selector:'CrmCaseMaintainProgram',
	styleUrls:['./CrmCaseMaintainProgram.component.css']
    
})


export class CrmCaseMaintainProgramComponent implements OnInit{
    
	DetailDialog: boolean;
	SpecsDialog: boolean;
	GwSeriesDialog: boolean;

    car: CrmCaseMaintainProgram = new PrimeCar();
	car1: any = new PrimeCar1();
    
    selectedCar: CrmCaseMaintainProgram;
    selectedCar1: any;
	
    newCar: boolean;
	newCar1: boolean;
	
    cars: CrmCaseMaintainProgram[];
	cars1: any[];
	
	cols:any;
	cols1:any;
	columnOptions:any;
	columnOptions1:any;
	carss1:any[]=[];
	
	gwSeries:any[];
	selectedGwSeries:any;
	colsGwSeries:any;

    constructor(private carService: CrmCaseMaintainProgramService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.carService.getSpecs().then(cars1 => this.cars1 = cars1);
        this.carService.getGwSeries().then(gwSeries => this.gwSeries = gwSeries);
		

		this.cols = [
			{field: 'name', header: 'name'},
			{field: 'startDt', header: 'startDt'},
			{field: 'occupier', header: 'occupier'},
			{field: 'cust', header: 'cust'},
			{field: 'saveOccupier', header: 'saveOccupier'},
        ];
		
		this.cols1 = [
			{field: 'spec', header: 'spec'},
			{field: 'gwSeries', header: 'gwSize'},
			{field: 'itemNo', header: 'itemNo'},
			{field: 'productsId', header: 'productsId'},
			{field: 'qty', header: 'qty'},
			{field: 'price', header: 'price'},
        ];
		
		this.colsGwSeries = [
			{field: 'seriesId', header: 'seriesId'},
			{field: 'seriesName', header: 'seriesName'},
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
	
    
    add() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.DetailDialog = true;
    }
	
	add1() {
        this.newCar1 = true;
        this.car1 = new PrimeCar1();
        this.SpecsDialog = true;
    }
    
    save() {
        let cars = [...this.cars];
        if(this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        
        this.cars = cars;
        this.car = null;
        this.DetailDialog = false;
    }
	
	save1() {
        let cars = [...this.cars1];
        this.car1.id=this.selectedCar.id;
        if(this.newCar1)
            cars.push(this.car1);
        else
            cars[this.findSelectedCarIndex1()] = this.car1;
        this.cars1 = cars;
        let index = this.findSelectedCarIndex();
        this.carss1=[];
        this.selectById(this.cars[index].id);
        this.car1 = null;
        this.SpecsDialog = false;
    }
	
	cancel(){
        this.DetailDialog = false;
        this.refreshArray();
    }
	
    cancel1(){
        this.SpecsDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.DetailDialog = false;
    }  

	delete1(){
        let index = this.findSelectedCarIndex1();
        this.cars1 = this.cars1.filter((val,i) => i!=index);
        index = this.findSelectedCarIndex();
        this.carss1=[];
        this.selectById(this.cars[index].id);
        this.car1 = null;
        this.SpecsDialog = false;
    }  	
    
    onRowSelect(event) {
        let index = this.findSelectedCarIndex();
		this.refreshArray();
        this.selectById(this.cars[index].id);
        this.newCar = false;
        this.car = this.cloneCar(event.data);
		this.DetailDialog = true;
    }
    onRowSelect1(event) {
        
        this.newCar1 = false;
        this.car1 = this.cloneCar1(event.data);
		console.log(this.car1);
        this.SpecsDialog = true;   
    }
	
	SelectedGwSeries($event){
		this.car1.productsId = this.selectedGwSeries.seriesName;
		this.GwSeriesDialog=false;
	}
    getGwSeries(){
		this.GwSeriesDialog=true;
	}
	
    cloneCar(c: CrmCaseMaintainProgram): CrmCaseMaintainProgram {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
	
	cloneCar1(c: any): any {
        let car = new PrimeCar1();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
	
	findSelectedCarIndex1(): number {
        return this.cars1.indexOf(this.selectedCar1);
    }
	
	selectById(id:any){
        let cnt:number=0;
        for(let i=0;i<this.cars1.length;i++){
			
            if(id == this.cars1[i].id){
			console.log("get");
              this.carss1[cnt]=this.cars1[i];
               cnt++;
                }
         }
    }
	
	refreshArray(){
        this.carss1=[];
    }
}

class PrimeCar implements CrmCaseMaintainProgram {
    
    constructor(public id?,public caseRank?) {}
}

class PrimeCar1  {
    
    constructor() {}
}



