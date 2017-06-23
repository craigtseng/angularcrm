import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {CrmCustomerMaintainProgram} from './CrmCustomerMaintainProgram.model';
import {CrmCustomerMaintainProgramService} from './CrmCustomerMaintainProgram.service';

@Component({
    templateUrl: 'CrmCustomerMaintainProgram.component.html',
	selector:'CrmCustomerMaintainProgram',
	styleUrls:['./CrmCustomerMaintainProgram.component.css']
    
})


export class CrmCustomerMaintainProgramComponent implements OnInit{
    
	DetailDialog: boolean;
	AddressDialog: boolean;
	PersonDialog: boolean;
	SpecsDialog: boolean;
	//detailShow: boolean;
	PostCodeDialog: boolean;

    car: CrmCustomerMaintainProgram = new PrimeCar();
	car1: any = new PrimeCar();
	car2: any = new PrimeCar();
	car3: any = new PrimeCar();
    
    selectedCar: CrmCustomerMaintainProgram;
    selectedCar1: CrmCustomerMaintainProgram;
    selectedCar2: CrmCustomerMaintainProgram;
    selectedCar3: CrmCustomerMaintainProgram;
    
    newCar: boolean;
	newCar1: boolean;
	newCar2: boolean;
	newCar3: boolean;
	
	postCode: any[];
    cars: CrmCustomerMaintainProgram[];
	cars1: CrmCustomerMaintainProgram[];
	cars2: CrmCustomerMaintainProgram[];
	cars3: CrmCustomerMaintainProgram[];
	cols:any;
	cols1:any;
	cols2:any;
	cols3:any;
	colsPostCode:any;
	carss1:any[]=[];
	carss2:any[]=[];
	carss3:any[]=[];
	
	
	columnOptions:any=[];
	columnOptions1:any=[];
	columnOptions2:any=[];
	columnOptions3:any=[];
	columnOptions_PostCode:any=[];
	
	selectedPostCode:any;
	showPlace:any;
	
	kind :any[];
    constructor(private carService: CrmCustomerMaintainProgramService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
		this.carService.getAddress().then(cars1 => this.cars1 = cars1);
		this.carService.getPostCode().then(postCode => this.postCode = postCode);
		this.carService.getPerson().then(cars2 => this.cars2 = cars2);
		this.carService.getSpecs().then(cars3 => this.cars3 = cars3);

		this.cols = [
			{field: 'id', header: 'id'},
			{field: 'name', header: 'name'},
			{field: 'busCategory', header: 'busCategory'},
			{field: 'occupier', header: 'occupier'},
			{field: 'tel', header: 'tel'},
			{field: 'fax', header: 'fax'},
			{field: 'kind', header: 'kind'},
			{field: 'class', header: 'class'},
			{field: 'payway', header: 'payway'},
			{field: 'labors', header: 'labors'},
			{field: 'factArea', header: 'factArea'},
			{field: 'capital', header: 'capital'},
			{field: 'revenue', header: 'revenue'},
			{field: ' mainProduct', header: ' mainProduct'},
			{field: 'productionUsed', header: 'productionUsed'},
			{field: 'agency', header: 'agency'},
			{field: 'isParent', header: 'isParent'},
			{field: 'parent', header: 'parent'} 
        ];
		
		this.cols1 = [
			{field: 'address1', header: 'address1'},
			{field: 'address2', header: 'address2'},
			{field: 'isDefault', header: 'isDefault'},
			{field: 'postcodePkId', header: 'postcodePkId'},
			
        ];
		
		this.cols2 = [
			{field: 'department', header: 'department'},
			{field: 'person', header: 'person'},
			{field: 'title', header: 'title'},
			{field: 'tel', header: 'tel'},
			{field: 'fax', header: 'fax'},
			{field: 'extension', header: 'extension'},
			{field: 'cellphone', header: 'cellphone'},
			{field: 'email', header: 'email'},
        ];
		
		this.cols3 = [
			{field: 'productsId', header: 'productsId'},
			{field: 'qty', header: 'qty'},
			{field: 'rivalAlias', header: 'rivalAlias'}
        ];
		
		this.colsPostCode = [
			{field: 'postCodeId', header: 'postCodeId'},
			{field: 'prefectureName', header: 'prefectureName'},
			{field: 'placeName', header: 'placeName'}
        ];
        
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
		for(let i = 0; i < this.cols1.length; i++) {
            this.columnOptions1.push({label: this.cols1[i].header, value: this.cols1[i]});
        }
		for(let i = 0; i < this.cols2.length; i++) {
            this.columnOptions2.push({label: this.cols2[i].header, value: this.cols2[i]});
        }
		for(let i = 0; i < this.cols3.length; i++) {
            this.columnOptions3.push({label: this.cols3[i].header, value: this.cols3[i]});
        }
		for(let i = 0; i < this.colsPostCode.length; i++) {
            this.columnOptions_PostCode.push({label: this.colsPostCode[i].header, value: this.colsPostCode[i]});
        }
		
		this.kind = [
			{"id":"1", "text":"Cust Kind New A"},
			{"id":"2", "text":"Cust Kind New B"},
			{"id":"3", "text":"Cust Kind New C"},
			{"id":"4", "text":"Cust Kind New D"},
		]
    }
	
    
    Add() {

        this.newCar = true;
        this.car = new PrimeCar();
        this.DetailDialog = true;
    }
	
	Add1() {
        this.newCar1 = true;
        this.car1 = new PrimeCar();
        this.AddressDialog = true;
    }
	
	Add2() {
        this.newCar2 = true;
        this.car2 = new PrimeCar();
        this.PersonDialog = true;
    }
	
	Add3() {
        this.newCar3 = true;
        this.car3 = new PrimeCar();
        this.SpecsDialog = true;
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
        this.carss1=[];
        this.selectById(this.cars[index].id);
        this.car1 = null;
        this.AddressDialog = false;
    }
	
	Save2() {
        let cars = [...this.cars2];
        this.car2.id=this.selectedCar.id;
        if(this.newCar2)
            cars.push(this.car2);
        else
            cars[this.findSelectedCarIndex2()] = this.car2;
        this.cars2 = cars;
        let index = this.findSelectedCarIndex();
        this.carss2=[];
        this.selectById(this.cars[index].id);
        this.car2 = null;
        this.PersonDialog = false;
    }
	
	Save3() {
        let cars = [...this.cars3];
        this.car3.id=this.selectedCar.id;
        if(this.newCar3)
            cars.push(this.car3);
        else
            cars[this.findSelectedCarIndex3()] = this.car3;
        this.cars3 = cars;
        let index = this.findSelectedCarIndex();
        this.carss3=[];
        this.selectById(this.cars[index].id);
        this.car3 = null;
        this.SpecsDialog = false;
    }
	
	Cancel(){
        this.DetailDialog = false;
        this.refreshArray();
    }
	
    Cancel1(){
        this.AddressDialog = false;
    }
	Cancel2(){
        this.PersonDialog = false;
    }
	Cancel3(){
        this.SpecsDialog = false;
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
        index = this.findSelectedCarIndex();
        this.carss1=[];
        this.selectById(this.cars[index].id);
        this.car1 = null;
        this.AddressDialog = false;
    }  

	Delete2(){
        let index = this.findSelectedCarIndex2();
        this.cars2 = this.cars2.filter((val,i) => i!=index);
        index = this.findSelectedCarIndex();
        this.carss2=[];
        this.selectById(this.cars[index].id);
        this.car2 = null;
        this.PersonDialog = false;
        
    } 

	Delete3(){
        let index = this.findSelectedCarIndex3();
        this.cars3 = this.cars3.filter((val,i) => i!=index);
        index = this.findSelectedCarIndex();
        this.carss3=[];
        this.selectById(this.cars[index].id);
        this.car3 = null;
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
        this.AddressDialog = true;   
    }
	 onRowSelect2(event) {
        
        this.newCar2 = false;
        this.car2 = this.cloneCar2(event.data);
        this.PersonDialog = true;   
    }
	 onRowSelect3(event) {
        
        this.newCar3 = false;
        this.car3 = this.cloneCar3(event.data);
        this.SpecsDialog = true;   
    }
    
    cloneCar(c: CrmCustomerMaintainProgram): CrmCustomerMaintainProgram {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
	
	cloneCar1(c: CrmCustomerMaintainProgram): CrmCustomerMaintainProgram {
        let car = new PrimeCar1();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
	
	cloneCar2(c: CrmCustomerMaintainProgram): CrmCustomerMaintainProgram {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
	
	cloneCar3(c: CrmCustomerMaintainProgram): CrmCustomerMaintainProgram {
        let car = new PrimeCar();
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
	
	findSelectedCarIndex2(): number {
        return this.cars2.indexOf(this.selectedCar2);
    }
	
	findSelectedCarIndex3(): number {
        return this.cars3.indexOf(this.selectedCar3);
    }
	selectById(id:any){
        let cnt:number=0;
        for(let i=0;i<this.cars1.length;i++){
            if(id == this.cars1[i].id){
              this.carss1[cnt]=this.cars1[i];
               cnt++;
                }
         }
		 
		cnt=0;
        for(let i=0;i<this.cars2.length;i++){
            if(id == this.cars2[i].id){
              this.carss2[cnt]=this.cars2[i];
               cnt++;
                }
         }
		 
		cnt=0;
        for(let i=0;i<this.cars3.length;i++){
            if(id == this.cars3[i].id){
              this.carss3[cnt]=this.cars3[i];
               cnt++;
                }
         }
    }
	
	 refreshArray(){
        this.carss1=[];
        this.carss2=[];
        this.carss3=[];
        
    }

	
	getPostCode(){
		this.PostCodeDialog=true;
	}
	SelectedPostCode($event){
		this.car1.postcodePkId = this.selectedPostCode.postCodeId;
		//this.showPlace =  this.selectedPostCode.placeName;
		this.PostCodeDialog=false;
	}
}

class PrimeCar implements CrmCustomerMaintainProgram {
    
    constructor() {}
}
class PrimeCar1 implements CrmCustomerMaintainProgram {
    
    constructor(public id? ,public postcodePkId?) {}
}



