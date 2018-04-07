import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { AccountComponent } from './account/account.component';
import { EventdetailComponent }  from './eventdetail/eventdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'detail/:id', component: EventdetailComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
