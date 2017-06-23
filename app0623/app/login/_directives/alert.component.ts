import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'attention',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}