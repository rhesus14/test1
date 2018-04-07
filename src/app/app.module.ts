import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { EventsComponent } from './events/events.component';
import { AppRoutingModule } from './/app-routing.module';
import { QRCodeModule } from 'ng-qrcode';
import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatCardModule, MatDividerModule, MatSidenav, MatSidenavModule, MatMenuModule, MatIconModule, MatListModule, MatExpansionModule, MatInputModule} from '@angular/material';
import { AccountComponent } from './account/account.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, AppRoutingModule, // imports firebase/storage only needed for storage features
    QRCodeModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule
  ],
  declarations: [ AppComponent, EventsComponent, AccountComponent, EventdetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}