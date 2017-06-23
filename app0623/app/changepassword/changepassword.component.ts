import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import {changepassword} from './changepassword';
import {changepasswordService} from './changepassword.service';

@Component({
    templateUrl: 'changepassword.component.html',
	selector:'changepassword',
	styleUrls:['./changepassword.css']
    
})


export class changepasswordComponent implements OnInit{

     input1 = '';
     input2 = '';
     input3 = '';
     keyupHandler1(event:any) {
            this.input1 = event.target.value;
        }
     keyupHandler2(event:any) {
            this.input2 = event.target.value;
        }
     keyupHandler3(event:any) {
            this.input3 = event.target.value;
        }

	displayDialog: boolean;
   
    totalRecords: number;

    car: changepassword = new PrimeCar();
	
    
    selectedCar: changepassword;
    art:any;
    newCar: boolean;

    cars: changepassword[]=[];
    
	cols:any;
	columnOptions:any;

    constructor(private carService: changepasswordService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	    
		this.cols = [
            {field: 'password', header: 'password'}
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
    
    cloneCar(c: changepassword): changepassword {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
    onclick(){
        if(this.input1 == "" || this.input2 == "" || this.input3 == "")
        { 
            alert("請輸入資料"); 
        }
        else
        {
            if (this.input1 == this.cars[0].password)
            {
                if(this.input2 == this.input3  && this.input2 != this.input1)
                {alert(this.input1+"\n新密碼:"+this.input2);}
                else{alert("請重新確認新密碼是否正確或者是否與舊密碼重疊")}
            }
            else
            alert("舊密碼錯誤"+this.input1);
        }
    }
}

class PrimeCar implements changepassword {
    
    constructor(public password?) {}
    
}



