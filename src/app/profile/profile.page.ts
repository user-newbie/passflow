import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

    user: any;
    sessionStorUser: any;
    constructor(private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.sessionStorUser = JSON.parse(sessionStorage.getItem('createdUser'));
    }

    ngOnInit() {}

    refresh() {
        window.location.reload();
    }

    logoutClicked() {
        console.log("Logout");
        //this.authService.logout();
        this.router.navigate(['/']);
        localStorage.clear();
    }

    createUser() {
        this.router.navigate(['/add/user']);
    }

}
