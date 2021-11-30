import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'university',
    templateUrl: 'university.component.html',
    styleUrls: ['university.component.scss']
})
export class UniversityPage implements OnInit {

    user: any;
    sessionStorUser: any;

    constructor(private router: Router) {
    }

    ngOnInit() {}


}
