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
            'number': 'Математический анализ',
            'status': 'free'
        },
        {
            'id': 2,
            'number': 'Социология',
            'status': 'not-free'
        },
        {
            'id': 3,
            'number': 'Английский язык',
            'status': 'free'
        },
        {
            'id': 4,
            'number': 'Алгоритмизация',
            'status': 'not-free'
        },
        {
            'id': 5,
            'number': 'Дискретная математика',
            'status': 'not-free'
        },
        {
            'id': 6,
            'number': 'История',
            'status': 'free'
        },
        {
            'id': 7,
            'number': 'История',
            'status': 'not-free'
        },
        {
            'id': 8,
            'number': 'Структура данных',
            'status': 'free'
        }
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
