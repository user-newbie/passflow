import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";


@Component({
    selector: 'page-delete-user',
    templateUrl: 'delete-user.component.html',
    styleUrls: ['delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit{

    users: any;
    user: any;

    constructor(private authService: AuthService,
                private alert: AlertController,
                private router: Router) {}

    ngOnInit() {
        this.authService.getAllUsers().subscribe( res => {
           this.users = res;
        });
    }

    async deleteUser(user){
        this.authService.deleteUser(user).subscribe( res => {
            console.log(res);
        });

        const alert = await this.alert.create({
            header: 'Пользователь успешно удален',
            message: 'Выбранный вами пользователь успешно удален',
            buttons: ['Ок']
        });
        await alert.present();
        this.router.navigate(['/main/profile']);

    }
}
