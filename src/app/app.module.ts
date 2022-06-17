import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavparamService} from './navparam.service'
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebaseConfig),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
 providers: [NavparamService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
