import {Component} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";



@Component({
    selector: 'page-add-user',
    templateUrl: 'add-user.component.html',
    styleUrls: ['add-user.component.scss']
})
export class AddUserComponent {

    toSave = {};

    constructor(private authService: AuthService,
                private alert: AlertController,
                private router: Router) {}

    async add(toSave) {
        toSave.status = 'user';
        this.authService.addUser(toSave).subscribe(data => {
            console.log(data);
        });
        const alert = await this.alert.create({
            header: 'Пользователь добавлен!',
            message: 'Пользователь успешно добавлен',
            buttons: ['Ок']
        });
        await alert.present();
        this.router.navigate(['/main/profile']);
    }
}
