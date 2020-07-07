import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage {

    user: any;

    constructor(private router: Router) {
        this.user = JSON.parse(localStorage.getItem('login'));
    }

    logoutClicked() {
        console.log("Logout");
        //this.authService.logout();
        this.router.navigate(['/']);
    }

    createUser() {
        this.router.navigate(['/add/user']);
    }

}
