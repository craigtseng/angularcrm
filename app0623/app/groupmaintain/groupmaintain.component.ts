import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {groupmaintain} from './groupmaintain';
import {groupmaintainService} from './groupmaintain.service';


@Component({
    templateUrl: 'groupmaintain.component.html',
	selector:'groupmaintain',
	styleUrls:['./groupmaintain.css']
    
})


export class groupmaintainComponent implements OnInit{
    
	DetailDialog: boolean;
    SubDetailDialog: boolean;
    detailShow:boolean = false;

    totalRecords: number;

    car: groupmaintain = new PrimeCar();
    car1: groupmaintain = new PrimeCar1();
	//case: businesstasktypel = new PrimeCase();
    
    selectedCar: groupmaintain;
    selectedCar1: groupmaintain;
   // selectedCase: businesstasktypel;

    newCar: boolean;
    newCar1: boolean;

    cars:groupmaintain[];
    cars1:any[];
    carss:any[]=[];
	subCars:groupmaintain[];
  //  cases:businesstasktypel[];
	cols:any;
    cols1:any;
	columnOptions:any;
    columnOptions1:any;

    constructor(private carService: groupmaintainService,private caseService: groupmaintainService) { }

    ngOnInit() {
        //this.caseService.getCarsSmall().then(cases => this.cases = cases);
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	    this.carService.getSub().then(cars1 => this.cars1 = cars1);

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
	
    
    Add() {
        this.detailShow=true;
        this.newCar = true;
        this.car = new PrimeCar();
        this.DetailDialog = true;
    }
     Add1() {
        this.detailShow=true;
        this.newCar1 = true;
        this.car1 = new PrimeCar1();
        this.SubDetailDialog = true;
    }

    
    Save() {
        let cars = [...this.cars];
        if(this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        
        this.cars = cars;
        this.car = null;
        this.DetailDialog = false;
        this.refreshArray();
    }
    Save1() {
        let cars = [...this.cars1];
        this.car1.id=this.selectedCar.id;
        if(this.newCar1)
            cars.push(this.car1);
        else
            cars[this.findSelectedCarIndex1()] = this.car1;
        this.cars1 = cars;
        let index = this.findSelectedCarIndex();
        this.carss=[];
        this.selectById(this.cars[index].id);
        this.car1 = null;
        this.SubDetailDialog = false;
    }
     
    Cancel(){
        this.DetailDialog = false;
        this.refreshArray();
    }
     Cancel1(){
        this.SubDetailDialog = false;
    }

    
    Delete() {
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.DetailDialog = false;
        this.refreshArray();
    }  
    Delete1(){
        let index = this.findSelectedCarIndex1();
        this.cars1 = this.cars1.filter((val,i) => i!=index);
        //console.log(index);
        //console.log(this.selectedCar1);
        index = this.findSelectedCarIndex();
        this.carss=[];
        this.selectById(this.cars[index].id);
        this.car1 = null;
        this.SubDetailDialog = false;
        
    }  
    
    onRowSelect(event) {
        let index = this.findSelectedCarIndex();
        this.selectById(this.cars[index].id);
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.DetailDialog = true;
        this.detailShow=true;     
    }
    onRowSelect1(event) {
        
        let index = this.findSelectedCarIndex();
		console.log(index);
		console.log(this.cars[index].id);
        this.getSubCars(this.cars[index].id);
        this.newCar1 = false;
        this.car1 = this.cloneCar1(event.data);
        this.SubDetailDialog = true;   
    }

     selectById(id:any){
        let cnt:number=0;
        for(let i=0;i<this.cars1.length;i++){
            if(id == this.cars1[i].id){
              this.carss[cnt]=this.cars1[i];
               cnt++;
                }
         }
    }

    refreshArray(){
        this.carss=[];
        this.detailShow=false;
    }
    
    cloneCar(c: groupmaintain): groupmaintain {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    cloneCar1(c: groupmaintain): groupmaintain {
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
	
	getSubCars(id:string){
	this.subCars=[];
	let cnt:number=0;
		for(let i=0;i<this.cars.length;i++){
			if(id != this.cars[i].id){
				this.subCars[cnt]=this.cars[i];
				//console.log(this.cars[i]);
				cnt++;
			}
		}
	}
}

class PrimeCar implements groupmaintain {
    
    constructor(public id?, public name?,public subid?) {}
}
class PrimeCar1 implements groupmaintain {
    
    constructor(public id?, public subid?) {}
}



