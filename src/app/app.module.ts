import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPage} from "./login/login.page";
import {FormsModule} from "@angular/forms";
import firebaseConfig from './firebase';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AuthService} from "./service/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {BusService} from "./service/bus.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
      AppComponent,
      LoginPage
  ],
  entryComponents: [
      LoginPage
  ],
  imports: [
      CommonModule,
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    BusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
