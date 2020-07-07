import {Component} from "@angular/core";
import {BusService} from "../../service/bus.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";



@Component({
    selector: 'page-add-bus',
    templateUrl: 'add-bus.component.html',
    styleUrls: ['add-bus.component.scss']
})
export class AddBusComponent {

    toSave = {};

    constructor(private busService: BusService,
                private alert: AlertController,
                private router: Router) {}

    async add(toSave) {
        toSave.status = 'free';
        toSave.place = [
            {
                "id": 1,
                "place": "1"
            },
            {
                "id": 2,
                "place": "2"
            },
            {
                "id": 3,
                "place": "3"
            },
            {
                "id": 4,
                "place": "4"
            },
            {
                "id": 5,
                "place": "5"
            },
            {
                "id": 6,
                "place": "6"
            },
            {
                "id": 7,
                "place": "7"
            },
            {
                "id": 8,
                "place": "8"
            },
            {
                "id": 9,
                "place": "9"
            },
            {
                "id": 10,
                "place": "10"
            },
            {
                "id": 11,
                "place": "11"
            },
            {
                "id": 12,
                "place": "12"
            },
            {
                "id": 13,
                "place": "13"
            },
            {
                "id": 14,
                "place": "14"
            },
            {
                "id": 15,
                "place": "15"
            },
            {
                "id": 16,
                "place": "6"
            },
            {
                "id": 17,
                "place": "17"
            },
            {
                "id": 18,
                "place": "18"
            },
            {
                "id": 19,
                "place": "19"
            },
            {
                "id": 20,
                "place": "20"
            }
        ];
        this.busService.addBus(toSave).subscribe(data => {
            console.log(data);
        });
        const alert = await this.alert.create({
            header: 'Автобус добавлен!',
            message: 'Автобус успешно добавлен',
            buttons: ['Ок']
        });
        await alert.present();
        this.router.navigate(['/main/buslist']);
    }
}
