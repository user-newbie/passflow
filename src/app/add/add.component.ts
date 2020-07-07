import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";



@Component({
    selector: 'page-add',
    templateUrl: 'add.component.html',
    styleUrls: ['add.component.scss']
})
export class AddComponent {

    @Input() inputData: string;

    constructor(private router: Router) {}

    goToCreateUser() {
        this.router.navigate(['/main/profile/add/user']);
    }

    goToDeleteUser() {
        this.router.navigate(['/main/profile/delete/user']);
    }

    goToCreateBus() {
        this.router.navigate(['/main/buslist/add/bus']);
    }

    goToDeleteBus() {
        this.router.navigate(['/main/buslist/delete/bus']);
    }
}
