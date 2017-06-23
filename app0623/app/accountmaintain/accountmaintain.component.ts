import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {accountmaintain} from './accountmaintain';
import {accountmaintainService} from './accountmaintain.service';


@Component({
    templateUrl: 'accountmaintain.component.html',
	selector:'accountmaintain',
	styleUrls:['./accountmaintain.css']
    
})


export class accountmaintainComponent implements OnInit{
    
	DetailDialog: boolean;
    GroupDialog:boolean;
    RoleDialog:boolean;
	detailShow: boolean =false;
    totalRecords: number;

    car: accountmaintain = new PrimeCar();
    At_Group: any = new PrimeCar1();
    At_Role: any = new PrimeCar2();
	//case: businesstasktypel = new PrimeCase();
    
    selectedCar: accountmaintain;
    selectedCar1;
    selectedCar2;
   // selectedCase: businesstasktypel;

    newCar: boolean;
    newCar1: boolean;
    newCar2: boolean;

    cars: accountmaintain[]=[];
    atGroup: any[];
    atGroups: any[]=[];
    atRole: any[];
    atRoles: any[]=[];
    atLog: any[];
    atLogs: any[]=[];
  //  cases:businesstasktypel[];
	cols:any;
    cols1:any;
    cols2:any;
    cols3:any;
	columnOptions:any;
    columnOptions1:any;
    columnOptions2:any;
    columnOptions3:any;


    constructor(private carService: accountmaintainService,private caseService: accountmaintainService) { }

    ngOnInit() {
        //this.caseService.getCarsSmall().then(cases => this.cases = cases);
        this.carService.getCarsSmall().then(cars => this.cars = cars);
	    this.carService.getAtGroup().then(atGroup => this.atGroup = atGroup);
        this.carService.getAtRole().then(atRole => this.atRole = atRole);
        this.carService.getAtLog().then(atLog => this.atLog = atLog);

		this.cols = [
            {field: 'id', header: 'id'},
            {field: 'name', header: 'name'},
            {field: 'userid', header: 'userid'},
            {field: 'disabled', header: 'disabled'}
           
        ];
        this.cols1 = [
            {field: 'groupId', header: 'groupId'},
            {field: 'groupName', header: 'groupName'}
        ];
         this.cols2 = [
            {field: 'isDefault', header: 'isDefault'},
            {field: 'roleId', header: 'roleId'},
            {field: 'roleName', header: 'roleName'},
            {field: 'groupName', header: 'groupName'}
        ];
         this.cols3 = [
            {field: 'isSuccessful', header: 'isSuccessful'},
            {field: 'loginIp', header: 'loginIp'},
            {field: 'loginDateTime', header: 'loginDateTime'},
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
        this.detailShow=true;
        this.newCar = true;
        this.car = new PrimeCar();
        this.DetailDialog = true;
    }
    AtGroupAdd() {
        this.detailShow=true;
        this.newCar1 = true;
        this.At_Group = new PrimeCar1();
        this.GroupDialog = true;
    }
    AtRoleAdd(){
        this.detailShow=true;
        this.newCar2 = true;
        this.At_Role = new PrimeCar2();
        this.At_Role.isDefault="N";
        this.RoleDialog = true;
        
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
        this.refreshArray();
    }
    AtGroupSave() {
        let cars = [...this.atGroup];
        this.At_Group.id=this.selectedCar.id;
        if(this.newCar1)
            cars.push(this.At_Group);
        else
            cars[this.findSelectedCarIndex1()] = this.At_Group;
        this.atGroup = cars;
        let index = this.findSelectedCarIndex();
        this.atGroups=[];
        this.selectById(this.cars[index].id);
        this.At_Group = null;
        this.GroupDialog = false;
    }
     AtRoleSave() {
        let cars = [...this.atRole];
        this.At_Role.id=this.selectedCar.id;
        if(this.newCar2)
            cars.push(this.At_Role);
        else
            cars[this.findSelectedCarIndex2()] = this.At_Role;
        this.atRole = cars;
        let index = this.findSelectedCarIndex();
        this.atRoles=[];
        this.selectById(this.cars[index].id);
        this.At_Role = null;
        this.RoleDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.DetailDialog = false;
        this.refreshArray();
    }    
    AtGroupDelete(){
        let index = this.findSelectedCarIndex1();
        this.atGroup = this.atGroup.filter((val,i) => i!=index);
        index = this.findSelectedCarIndex();
        this.atGroups=[];
        this.selectById(this.cars[index].id);
        this.At_Group = null;
        this.GroupDialog = false;
    }
    AtRoleDelete(){
        let index = this.findSelectedCarIndex2();
        this.atRole = this.atRole.filter((val,i) => i!=index);
        index = this.findSelectedCarIndex();
        this.atRoles=[];
        this.selectById(this.cars[index].id);
        this.At_Role = null;
        this.RoleDialog = false;
    }
    Cancel(){
        this.DetailDialog = false;
        this.refreshArray();
    }

    AtGroupCancel(){
        this.GroupDialog = false;
    }

    AtRoleCancel(){
        this.RoleDialog = false;
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
        let index = this.findSelectedCarIndex1();
        this.newCar1 = false;
        this.At_Group = this.cloneCar1(event.data);
        this.GroupDialog = true;    
    }

     onRowSelect2(event) {
        let index = this.findSelectedCarIndex2();
        this.newCar2 = false;
        this.At_Role = this.cloneCar2(event.data);
        this.RoleDialog = true;    
    }
    
    cloneCar(c: accountmaintain): accountmaintain {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    cloneCar1(c: accountmaintain): accountmaintain {
        let car = new PrimeCar1();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
      cloneCar2(c: accountmaintain): accountmaintain {
        let car = new PrimeCar2();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
    findSelectedCarIndex1(): number {
        return this.atGroup.indexOf(this.selectedCar1);  
    }
     findSelectedCarIndex2(): number {
        return this.atRole.indexOf(this.selectedCar2);  
    }

    selectById(id:any){
        let cnt:number=0;
        for(let i=0;i<this.atGroup.length;i++){
            if(id == this.atGroup[i].id){
               this.atGroups[cnt]=this.atGroup[i];
               cnt++;
                }
         }
        cnt=0;
        for(let i=0;i<this.atRole.length;i++){
            if(id == this.atRole[i].id){
               this.atRoles[cnt]=this.atRole[i];
               cnt++;
                }
         }
        cnt=0;
        for(let i=0;i<this.atLog.length;i++){
            if(id == this.atLog[i].id){
               this.atLogs[cnt]=this.atLog[i];
               cnt++;
                }
         }
    }

    refreshArray(){
        this.atGroups=[];
        this.atLogs=[];
        this.atRoles=[];
        this.detailShow=false;
    }
}
 
class PrimeCar implements accountmaintain {
    
    constructor(public id?, public name?,public  userid?,public password?,public disabled?,public activeStartDate?,public  activeEndDate?,
    public email?,public groupid?,public groupname?,public isDefault?,public roleid?,public rname?,public dname?,public issucessful?,public loginip?,public logindate?) {}
}

class PrimeCar1  {
    
    constructor(public id?,public groupId?,public groupName?) {}
}

class PrimeCar2  {
    
    constructor(public id?,public isDefault?,public roleId?,public roleName?,public groupName?) {}
}


/*class PrimeCase implements businesstasktypel {
    
    constructor(public tasktype?) {}
}*/



