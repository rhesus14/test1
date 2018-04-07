import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  title:string;
  eventid :number;
  description: string;

  events: Observable<any[]>;
  constructor(public db: AngularFirestore) {
    this.events = db.collection('events').valueChanges();
  }

  addEvent() {
    this.db.collection('events').add({'title': this.title, 'eventid': this.eventid, 'description': this.description});
  }
}
