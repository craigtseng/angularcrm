import {Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { routing} from '../app.routing';

import { User } from '../login/_models/index';
import { MenuItem } from 'primeng/primeng';

import { UserService } from '../login/_services/index';
import { HomeService } from './home.service';
import { select } from './select';





@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
	styleUrls: ['./home.css'],
	
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
	lan:string;//設定語言區變數
	area:string;
	password:string;
	
	taz : MenuItem[] = [];
	tak : MenuItem = {label: '群組資料維護',routerLink:'/test'};
	selected:number;
	i:number;
	public sel: select;
	
	private itemstemp:any;
	private items:any;
	private itemst:any;
	rules:any;
	temp:any;
	mysel:any;
	//temp:any =this.rules[1].value;;
    constructor(private userService: UserService , private router:Router, private homeService: HomeService) {
 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.lan = localStorage.getItem('lan');//從authentication抓資料來
		this.area = localStorage.getItem('area');
		
		this.router.navigate(['blank']);
	}
	

    ngOnInit() {
		this.loadAllUsers();

		//this.homeService.getMenu().then(items => this.items = items);
		/*this.homeService.getUsers().subscribe(items => this.items = items,
												err => console.error(err),
												()  => {this.items=this.items});*/
		this.homeService.getTest().subscribe(items => this.items = items,
												err => console.error(err),
												()  => {this.itemstemp = this.items});
		this.homeService.getmenutest().subscribe(itemst => this.itemst = itemst,
												err => console.error(err),
												()  => {/*console.log(this.itemst)*/});
		//this.homeService.getrule().then(rules => this.rules = rules);

		this.homeService.getrule().subscribe(rules => this.rules = rules,
												err => console.error(err),
												()  => {this.setuse()});
		//this.setuse();
	
    }
	
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
	
	//預設初始值
	setuse(){
		
		for (let i=0;i<this.rules.length;i++)
		{
			if(this.currentUser.ide == this.rules[i].ide)
				{   	
					//console.log(this.rules[i].ide);
					this.temp = this.rules[i].temp;
				    console.log(this.temp[0]);
					if(this.temp[0].value == "guest")
						{
							this.items = this.itemst;
						}
					else{
							this.items = this.items;
						}
						break;
				}
				else{/*console.log(this.rules[i].ide)*/}
		}	
		
		
	}
	onChange($event) {
		//console.log(this.temp.value);
		// I want to do something here for new selectedDevice, but what I
		// got here is always last selection, not the one I just select.
		if(this.temp.value == "guest")
		{
			for (let i=0;i<this.temp.length;i++)
			{
				if(this.temp[i].value == "guest")
					{	
						console.log(this.temp[i]);
						
						//window.location.reload();
						this.itemstemp = this.itemst;
						break;
					}
				
			}
		}
	  if(this.temp.value == "admin")
		{
			for (let i=0;i<this.temp.length;i++)
			{
				if(this.temp[i].value == "admin")
					{	
						console.log(this.temp[i]);
						this.mysel = this.temp[i].idr;
						console.log(this.mysel);
						this.itemstemp = this.items;
						break;
					}
				
			}
		}   
	  /* if(this.temp[i].value == "guest")
			{	
				console.log(this.temp[i]);
				this.itemstemp = this.itemst;
				break;
				 
				if(this.temp[i].value == "admin")
					{  
						
						console.log(this.temp[i]);
						this.itemstemp = this.items;
						break;
					}
			}
		if(this.temp[i].value == "guest")
			{	
				console.log(this.temp);
				this.itemstemp = this.itemst;
			}
		  else if(this.temp.value == "admin")
		  {  
			 
			  console.log(123456)
			  this.itemstemp = this.items;
		  }*/
		}
	removeTab(tab: MenuItem) {
   
    let index = this.taz.indexOf(tab);
			 this.taz.splice(index,1); //remove tab by index
			 if(this.selected>0 ){
				this.selected-=1;
				this.router.navigate(this.taz[this.selected].routerLink);}
			else{ 
				this.router.navigate(['blank']); }
			console.log(this.taz[this.selected].label);
	}
	
	
	removeAllTab(){
	if(this.taz.length>0){
		var i= this.taz.length;
		while(i>-1){
			 this.taz.splice(i, 1);
			i-=1;}}
		this.router.navigate(['blank']);
	}
	
	addTab2() {
		this.taz.push(this.tak);
	}
	
	addTab(tab: MenuItem) {
		this.taz.push(tab);
		console.log(tab,this.taz);
		let index = this.taz.indexOf(tab);
		if(this.taz.length>1){
			if(index<this.taz.length-1)
				this.taz.splice(this.taz.length-1);
		}
			
			this.selected = index;
			console.log(tab.label);
	}
	
	showContent(tab:MenuItem){
		this.selected = this.taz.indexOf(tab);
		this.router.navigate(tab.routerLink);
	}
	
	logOut(){
		if(confirm("你確定要登出嗎?"))
			{
				this.router.navigate(["../login"]);	
			}
	}	
	
	function() {
		alert('123');
	}

}
	
