import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {BusService} from "../../service/bus.service";


@Component({
    selector: 'page-delete-bus',
    templateUrl: 'delete-bus.component.html',
    styleUrls: ['delete-bus.component.scss']
})
export class DeleteBusComponent implements OnInit{

    buses: any;
    bus: any;

    constructor(private busService: BusService,
                private alert: AlertController,
                private router: Router) {}

    ngOnInit() {
        this.busService.getBusses().subscribe( res => {
            this.buses = res;
        });
    }

    async deleteUser(user){
        this.busService.deleteBus(user).subscribe( res => {
            console.log(res);
        });

        const alert = await this.alert.create({
            header: 'Автобус успешно удален',
            message: 'Выбранный вами автобус успешно удален',
            buttons: ['Ок']
        });
        await alert.present();
        this.router.navigate(['/main/buslist']);

    }
}
