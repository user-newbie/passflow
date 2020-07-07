import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {ProfilePage} from "../profile/profile.page";
import {BusListPage} from "../bus-list/bus-list.page";
import {BusDetailPage} from "../bus-list/bus-detail/bus-detail.page";
import {AddComponent} from "../add/add.component";
import {AddUserComponent} from "../add/user/add-user.component";
import {AddBusComponent} from "../add/bus/add-bus.component";
import {DeleteUserComponent} from "../add/user/delete-user.component";
import {DeleteBusComponent} from "../add/bus/delete-bus.component";

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'buslist',
                component: BusListPage,
            },
            {
                path: 'bus/:id',
                component: BusDetailPage
            },
            {
                path: 'profile',
                component: ProfilePage
            },
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'profile/add/user',
                component: AddUserComponent
            },
            {
                path: 'profile/delete/user',
                component: DeleteUserComponent
            },
            {
                path: 'buslist/add/bus',
                component: AddBusComponent
            },
            {
                path: 'buslist/delete/bus',
                component: DeleteBusComponent
            },
            {
                path: '',
                redirectTo: '/main/buslist',
                pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
