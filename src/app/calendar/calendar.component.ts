import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    user: any;
    sessionStorUser: any;

    constructor(private router: Router) {
    }

    ngOnInit() {}


}
