import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  user: any;

  constructor() {
      this.user = JSON.parse(localStorage.getItem('login'));
  }

}
