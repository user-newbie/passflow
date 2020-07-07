import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {BusListPage} from "../bus-list/bus-list.page";
import {BusDetailPage} from "../bus-list/bus-detail/bus-detail.page";
import {ProfilePage} from "../profile/profile.page";
import {AddUserComponent} from "../add/user/add-user.component";
import {AddBusComponent} from "../add/bus/add-bus.component";
import {AddComponent} from "../add/add.component";
import {DeleteUserComponent} from "../add/user/delete-user.component";
import {DeleteBusComponent} from "../add/bus/delete-bus.component";

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      TabsPageRoutingModule
    ],
    declarations: [
      TabsPage,
      BusListPage,
      BusDetailPage,
      ProfilePage,
      AddUserComponent,
      AddBusComponent,
      AddComponent,
      DeleteUserComponent,
      DeleteBusComponent
    ],
    entryComponents: [
      TabsPage,
      BusListPage,
      BusDetailPage,
      ProfilePage
    ],
    bootstrap: [
      TabsPage,
      BusListPage,
      BusDetailPage,
      ProfilePage,
      AddUserComponent,
      AddBusComponent,
      AddComponent,
      DeleteUserComponent,
      DeleteBusComponent
    ]
})
export class TabsPageModule {}
