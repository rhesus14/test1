import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Event} from './event';
import * as firebase from 'firebase/app';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import {Observable} from 'rxjs/Observable';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable()
export class EventService {

  readonly path = 'posts';
  
  constructor(private afs: AngularFirestore) { }

  update(id: string, data: Partial<Event>): Promise<void> {
    return this.afs.doc<Event>(`${this.path}/${id}`).update(data);
  }

}
