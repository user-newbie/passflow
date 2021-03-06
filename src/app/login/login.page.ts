import {Component} from "@angular/core";
import {NavController} from "@ionic/angular";
import {TabsPage} from "../tabs/tabs.page";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";


@Component({
    selector: 'page-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {

    username: string = '';
    password: string = '';

    constructor(private router: Router,
                public loginService: AuthService) {}

    signIn() {
        const sStorUs = JSON.parse(sessionStorage.getItem('createdUser'));
        const user = {
            'login': this.username,
            'password': this.password,
            'name': this.username,
            'role': ''
        };
        if (this.username === 'admin') {
            user.role = 'admin';
        } else if (sStorUs.login === this.username) {
            user.role = 'createdUser';
        }  else {
            user.role = 'user';
        }
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/main']);
        /*     this.loginService.loginByUsernameAndPassword({"where":{"and":[{"login": this.username},{"password": this.password}]}})
                 .subscribe(data => {
                     if (data[0] && data[0].login == this.username && data[0].password == this.password) {
                         localStorage.setItem("login", JSON.stringify(data[0]));
                    this.router.navigate(['/main']);
                }else{
                    console.log("ERROR");
                    console.log(this.username, this.password, '==>', data[0]);
                }
            });*/
    }

   // nav() {
   //      this.router.navigate(['/main']);
   //  }
}
