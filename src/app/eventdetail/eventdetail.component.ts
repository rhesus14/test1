import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { DocumentReference } from '@firebase/firestore-types';
// import { EventService } from '../event.service'

interface Item {
  title: string;
  content: string;
}

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})

export class EventdetailComponent implements OnInit {
  id: number;
  private sub: any;
  events: Observable<any[]>;
  attendees: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore, private route: ActivatedRoute, private router: Router ) {
    // console.log(route);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = + params['id']
    });
    this.events = this.db.collection('events', ref => ref.where('eventid', '==', this.id )).valueChanges();
    // this.attendees = this.db.collection('events').doc('8hNSy0sRwxmJ3aN6BHLL').collection('attendees').valueChanges();
  }
}
