import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import {CrmExhibitionReport} from './CrmExhibitionReport.model';
import {CrmExhibitionReportService} from './CrmExhibitionReport.service';
import { User } from '../login/_models/index';
import { DatePipe } from '@angular/common';
@Component({
    templateUrl: 'CrmExhibitionReport.component.html',
	selector:'CrmExhibitionReport',
	styleUrls:['./CrmExhibitionReport.component.css']
    
})



export class CrmExhibitionReportComponent implements OnInit{
	currentUser: User;
   
    car:CrmExhibitionReport = new PrimeCar();
    cars: CrmExhibitionReport[];
	
	cols:any;
	
	columnOptions:any;

	users:any;
	
	jobs:any;

    constructor(private carService: CrmExhibitionReportService) {
		
	}

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.carService.getUser().then(users => this.users = users);
		this.carService.getJob().then(jobs => this.jobs = jobs);
		 
		this.cols = [
			{field: 'jobCategory', header: 'jobCategory'},
			{field: 'createUserName', header: 'createUserName'},
			{field: 'createdTime', header: 'createdTime'},
        ];
		
		/*this.jobs = [
			{"id":1 , "name":"展示會報表(展示會與擔當者別-金額)"},
			{"id":2 , "name":"展示會報表(展示會金額)"},
		];
		
		this.users = [
			{"name":"王大名"},
			{"name":"王中名"},
			{"name":"王小名"},
		];*/
        
        this.columnOptions = [];
        for(let i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
        }
		
		
    }
	

	
    save() {
		this.car.createUserName=this.currentUser.lastName;
		let now = new Date() ;
		
		var datePipe = new DatePipe("en-us");
		this.car.createdTime = datePipe.transform(now, 'yyyy/MM/dd HH:mm:ss');
		
        let cars = [...this.cars];
            cars.push(this.car);
        this.cars = cars;
        this.car = null;
        this.car = new PrimeCar();
		alert('Report will be mail to you later');
    }
    
}

class PrimeCar implements CrmExhibitionReport {
    
    constructor(public jobCategory?, public createUserName?, public createdTime?) {}
}



