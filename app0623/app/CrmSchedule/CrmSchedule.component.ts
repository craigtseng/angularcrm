﻿import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import {CrmSchedule} from './CrmSchedule.model';
import {CrmScheduleService} from './CrmSchedule.service';
import { DatePipe } from '@angular/common';

@Component({
    templateUrl: 'CrmSchedule.component.html',
	selector:'CrmSchedule',
	styleUrls:['./CrmSchedule.component.css']
    
})


export class CrmScheduleComponent implements OnInit{
	
	events: any[];
    
    header: any;
    
    event: MyEvent;
    
    dialogVisible: boolean = false;
    
    idGen: number = 100;
    
    constructor(private crmScheduleService: CrmScheduleService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.crmScheduleService.getEvents().then(events => {this.events = events;});
        
        this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};
    }
    
    handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }
    
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    
    saveEvent() {
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            this.event.id = this.idGen++;
            this.events.push(this.event);
            this.event = null;
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }
        
        return index;
    }
	
}

export class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
	startTime:string;
    allDay: boolean = true;
}
//var datePipe = new DatePipe("en-us");
		//this.event.start = datePipe.transform(this.event.start, 'yyyy-MM-dd');
	


