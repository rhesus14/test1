import { Injectable } from '@angular/core';
import { Event } from './event';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class EventService {

  constructor(private messageService: MessageService) { }

  // getEvents(): Observable<Event[]> {
  //   // Todo: send the message _after_ fetching the heroes
  //   this.messageService.add('EventService: fetched events');
  //   return of(Event);
  // }

  getEvent(id: number): Observable<Event> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`EventService: fetched event id=${id}`);
    // return of(Event.find(event => event.id === id));
    return
  }

}
