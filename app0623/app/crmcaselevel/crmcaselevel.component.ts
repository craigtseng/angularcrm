import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {crmcaselevel} from './crmcaselevel';
import {CrmCaseLevelService} from './CrmCaseLevelService';

import { UserService } from '../login/_services/index';
import { User } from '../login/_models/index';

@Component({
    templateUrl: 'crmcaselevel.component.html',
	selector:'crmcaselevel',
	styleUrls:['./crmcaselevel.component.css']
    
})


export class crmcaselevelComponent implements OnInit{
    
	displayDialog: boolean;
    currentUser: User;
    totalRecords: number;

    car: crmcaselevel = new PrimeCar();
	
    
    selectedCar: crmcaselevel;
    
    newCar: boolean;

    cars: crmcaselevel[];
	cols:any;
	columnOptions:any;
	
	items:any;
    rules:any;
    crudlevel:any;
    temp:boolean;

    constructor(private crmcaselevelService: CrmCaseLevelService,private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     }

    ngOnInit() {
        this.getData();
        this.crmcaselevelService.getrule().subscribe(rules => this.rules = rules,
												     err => console.error(err),
												     ()  => { console.log(this.rules[1].temp.length)
                                                              console.log(this.currentUser.ide)
                                                    });
        this.crmcaselevelService.getcrud().subscribe(crudlevel => this.crudlevel = crudlevel,
												     err => console.error(err),
												     ()  => { console.log(this.crudlevel)
                                                              this.check()
                                                    });

		this.cols = [
            {field: 'caseRank', header: 'CaseRank'}
        ];
        
        this.columnOptions = [];
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
    }
	
    
    check()
    {
        for(let i=0;i<this.crudlevel.length;i++)
        { 
              if(this.crudlevel[i].ide == this.currentUser.ide )
                {
                    //console.log(this.crudlevel[i].idr);
                   // console.log(this.rules[i].temp.length);
                    for(let y=0;y<this.rules[i].temp.length;y++)
                    {   
                        /*  
                        console.log(this.crudlevel[i].idr);
                        console.log(this.rules[i].temp[y].idr);*/
                        if(this.crudlevel[i].idr == this.rules[i].temp[y].idr)
                          {
                            console.log("good"); 
                            console.log(this.crudlevel[i].ide);
                            this.temp = this.crudlevel[i].create;
                            console.log(this.crudlevel[i].create);
                            console.log(this.temp);
                            break;
                        }  
                    }
                   
                }
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
		alert(this.car.caseRank);
		console.log(this.car);
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
    
    cloneCar(c: crmcaselevel): crmcaselevel {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
	
	getData() {
		this.crmcaselevelService.getCarsSmall()
								.subscribe(cars => this.cars = cars,
										   err  => console.error(err),
										   ()   => console.log(this.cars));
		
	}
	
	getItems() {
		this.crmcaselevelService.getItems()
								.subscribe(items => this.items = items,
										   err   => console.error(err),
										   ()    => console.log(this.items));
	}
	
}



class PrimeCar implements crmcaselevel {
    
    constructor(public pkid?,public caseRank?) {}
}



