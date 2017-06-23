import { Component, OnInit ,Injectable} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, UserService } from '../login/_services/index';

import { LoginService } from './login.services';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
	flag:boolean =false;
	defaultUsers: any;
	
	
	
		
   constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService,
		private loginService: LoginService) { 
			this.model = {
				lan: "Traditional_Chinese",
				area: "formal_area"
				
			}; 
		}

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		
		this.loginService.getUsers()
			.subscribe(
				data => { this.defaultUsers = data},
				err => console.error(err),
				() => {
						this.createUsers();
					  });
				
		 
    }

	
    login() {
        this.loading = true;
		
        this.authenticationService.login(this.model.username, this.model.password, this.model.lan, this.model.area)
            .subscribe(
                data => {		
                    this.router.navigate([this.returnUrl]);	
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
	
	createUsers(){
		for(let i=0;i<this.defaultUsers.length;i++){
			 this.userService.create(this.defaultUsers[i])
				  .subscribe(
					data => {},
					error => {});
		}
	}
	
}
