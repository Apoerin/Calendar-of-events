import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarService } from './calendar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DatePipe]
})
export class AppComponent implements OnInit {

  date: Date;
  weeks: Array<Array<{date: Date, hasEvent: boolean, eventTitle: string}>>;

  constructor( private datePipe: DatePipe, private calendar: CalendarService, private modalService: NgbModal) {}

  ngOnInit() {
    this.date = new Date();

    this.getEvents();
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'MM-yyyy');
  }

  prevMonth() {
    this.date = new Date(this.date);
    this.date.setMonth(this.date.getMonth() - 1);

    this.getEvents();
  }

  nextMonth() {
    this.date = new Date(this.date);
    this.date.setMonth(this.date.getMonth() +1);

    this.getEvents();
  }

  now() {
    this.date = new Date();

    this.getEvents();
  }

  getEvents() {
    this.calendar.setDate(this.date);
    this.weeks = this.calendar.getWeeks().map(x => { return x.map(y => {return { date: y, hasEvent: false, eventTitle: ""}})});
    const from = this.calendar.getFrom();
    const to = this.calendar.getTo();
  }

  openModalContent(weekIdx, day) {
    const  modalRef = this.modalService.open(ModalContentComponent);
    modalRef.result.then((result) => {
      day.hasEvent = true;
      day.eventTitle = result;
      console.log("result ->", result);
    }).catch((error) => {
      console.error(error);
    });
  }

}
