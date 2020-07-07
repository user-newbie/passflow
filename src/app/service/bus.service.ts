import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BusService {

    private host = 'http://194.4.58.142:3000/buses';

    constructor(private http: HttpClient) { }


    getBusses() {
        return this.http.get<any>(this.host);
    }

    getBusById(id){
        let filter = {"where":{"id":id}};
        let url = 'http://194.4.58.142:3000/buses?filter='+JSON.stringify(filter);
        return this.http.get<any>(url);
    }

    addBus(data) {
        return this.http.post(this.host, data);
    }

    deleteBus(id) {
        return this.http.delete(this.host + '/' + id);
    }

}
