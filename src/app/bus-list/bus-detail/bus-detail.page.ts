import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {BusService} from "../../service/bus.service";

@Component({
    selector: 'bus-detail',
    templateUrl: 'bus-detail.page.html',
    styleUrls: ['bus-detail.page.scss']
})
export class BusDetailPage implements OnInit {

    seats = [
        {
            "id": 1,
            "place": 1
        },
        {
            "id": 2,
            "place": 2
        },
        {
            "id": 3,
            "place": 3
        },
        {
            "id": 4,
            "place": 4
        },
        {
            "id": 5,
            "place": 5
        },
        {
            "id": 6,
            "place": 6
        },
        {
            "id": 7,
            "place": 7
        },
        {
            "id": 8,
            "place": 8
        },
        {
            "id": 9,
            "place": 9
        },
        {
            "id": 10,
            "place": 10
        }
    ]

    items = [
        {
            "id": 1,
            "name": "1",
            "status": 1
        },
        {
            "id": 2,
            "name": "2",
            "status": 0
        },
        {
            "id": 3,
            "name": "3",
            "status": 1
        },
        {
            "id": 4,
            "name": "4",
            "status": 0
        },
        {
            "id": 5,
            "name": "5",
            "status": 1
        },
        {
            "id": 6,
            "name": "6",
            "status": 1
        }
    ];

    item: any;

    subjects = [
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

    constructor(private route: ActivatedRoute,
                private busService: BusService) {}

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
   /*     this.subjects.forEach(i => {
            i.id = id;
            console.log(i);
        });*/
        return this.subjects.find(x => x.id === id);
        this.getDimensionsByFind();
    }

     getDimensionsByFind(){
        const id = this.route.snapshot.params['id'];
        return this.subjects.find(x => x.id === id);
    }
}
