import { Injectable } from '@angular/core';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventListService {
  eventList: Event[];

  constructor() {
    this.eventList = [];
  }

  event: Event;
  value: string;

  addEvent(value: string) {
    this.event = new Event();
    this.event.text = value;
    this.eventList.push(this.event);
  }
}
