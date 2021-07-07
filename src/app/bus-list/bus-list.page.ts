import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {NavController} from "@ionic/angular";
import {BusService} from "../service/bus.service";

@Component({
    selector: 'bust-list',
    templateUrl: 'bus-list.page.html',
    styleUrls: ['bus-list.page.scss']
})
export class BusListPage implements OnInit{

    items = [
        {
            'id': 1,
            'number': 1,
            'status': 'free'
        },
        {
            'id': 2,
            'number': 2,
            'status': 'not-free'
        },
        {
            'id': 3,
            'number': 3,
            'status': 'free'
        },
        {
            'id': 4,
            'number': 4,
            'status': 'not-free'
        },
        {
            'id': 5,
            'number': 5,
            'status': 'not-free'
        },
        {
            'id': 6,
            'number': 6,
            'status': 'free'
        },
        {
            'id': 7,
            'number': 7,
            'status': 'not-free'
        },
    ];
    segmentModel = "all";
    user: any;

    constructor(private router: Router,
                private navCtrl: NavController,
                private busService: BusService) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    segmentChanged(event){
        console.log(this.segmentModel);
        console.log(event);
    }

    ngOnInit() {
        this.getBusses();
    }

    getBusses() {
       /* this.busService.getBusses().subscribe( res => {
           this.items = res;
        });*/
        return this.items;
    }

    openDetail(item) {
        this.router.navigate(['/main/bus', item.id]);
    }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
}
