import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    private host = 'http://194.4.58.142:3000/profiles';

    constructor(private http: HttpClient) { }

    loginByUsernameAndPassword(data: Object = null) {
        let url = this.host+'?filter='+JSON.stringify(data);
        return this.http.get<any>(url);
    }

    addUser(data) {
        return this.http.post(this.host, data);
    }

    getAllUsers() {
        return this.http.get<any>(this.host);
    }

    deleteUser(id) {
        return this.http.delete(this.host + '/' + id);
    }

}
