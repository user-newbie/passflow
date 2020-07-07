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

    items: any;
    segmentModel = "all";
    user: any;

    constructor(private router: Router,
                private navCtrl: NavController,
                private busService: BusService) {
        this.user = JSON.parse(localStorage.getItem('login'));
    }

    segmentChanged(event){
        console.log(this.segmentModel);
        console.log(event);
    }

    ngOnInit() {
        this.getBusses();
    }

    getBusses() {
        this.busService.getBusses().subscribe( res => {
           this.items = res;
        });
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
