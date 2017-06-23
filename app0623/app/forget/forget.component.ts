import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../login/_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'forget.component.html'
})

export class ForgetComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private alertService: AlertService) { }

    forget() {
				   this.alertService.error('資料已傳送至系統管理員', true);
				   //alert("資料已傳送至系統管理員");
				   this.loading=true;
				   setTimeout(() => this.login(), 2000);
			    }
	login(){
			this.router.navigate(['/login']);   
	}
}
