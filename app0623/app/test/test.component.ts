import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Ng2BootstrapModule, ModalModule } from 'ngx-bootstrap';
import {Observable} from 'rxjs/Rx';

/*import { UserPage } from '../../pages/user.component';
import { UserAddPage } from '../../pages/user-add.component';
import { UserModifyPage } from '../../pages/user-modify.component';
import { UserServicecrud } from '../../services/user.service';*/

import { Car } from './Car';
import { TestService }  from './test.service'

@Component({
    templateUrl: 'test.component.html',
	selector:'test'
	
})


export class testComponent{
	cars: any[];
	carss:any[];
	cars1: any[];
	cars2: any[];
    fateCars:any=[];
    cols: any[];
	a:any=this.fateCars;
    test:any;
    test2:any;
	errorMessage: string;
	
	str: any;
	
    constructor(private testService: TestService) { }

    ngOnInit() {
		
		
        this.cars1 = [
			{vin: 'dsad231ff', year:'2012', brand:'VW'},
			{vin: 'gwregre345', year:'2011', brand:'Audi'},
			{vin: 'h354htr', year:'2005', brand:'Renault'},
			{vin: 'j6w54qgh', year:'2003', brand:'BMW'}
		]
		
		this.cars2 = [
			{vin: 'dsad231ff',  color:'Orange'},
			{vin: 'gwregre345', color:'Black'},
			{vin: 'h354htr', color:'Gray'},
			{vin: 'j6w54qgh', color:'Blue'}
		]
        
		this.cars = [
			{vin: 'dsad231ff', year:'2012', brand:'VW', color:'Orange'},
			{vin: 'gwregre345', year:'2011', brand:'Audi', color:'Black'},
			{vin: 'h354htr', year:'2005', brand:'Renault', color:'Gray'},
			{vin: 'j6w54qgh', year:'2003', brand:'BMW', color:'Blue'}
		]
		
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
		
		this.str= '';
    }
	
	join(){
	this.fateCars=[];
		for(let i=0;i<this.cars1.length;i++){
			if(this.cars2[i].vin == this.cars1[i].vin){
				this.fateCars[i]={"vin":this.cars2[i].vin,
						      "color":this.cars2[i].color,
						      "year":this.cars1[i].year,
							  "brand":this.cars1[i].brand};
			}
		}
		this.a=this.fateCars;
	}
	
	getCar1(){
		this.a=this.cars1;
	}
	getCar2(){
		this.a=this.cars2;
	}
	
	clear(){
		this.a=[];
	}
	
	Get(){
		this.testService.getCars().then(carss => this.test2 = carss);
		console.log(this.test2);
								  
		this.testService.getCarsSmall().subscribe(
			data => { this.carss = data},
			err => console.error(err),
			() => console.log(this.carss)
		);
		
		this.testService.gettest()
                       .subscribe(
                       test => this.test = test,
                       error =>  this.errorMessage = <any>error,
					   () => console.log(this.test)
					   );
		
	}
	
	get(){
		
	}
	
	delete(){
    if (confirm("Are you sure you want to delete ?")) {
      this.testService.deleteFood().subscribe(
         data => {// refresh the list
           
           //this.Get();
		   //console.log(this.carss);
           return true;
         },
         error => {
           console.error("Error!");
           return Observable.throw(error);
         }
      );
    }
  }
  
    msgs: any[];
    
    onTabChange(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }

}

