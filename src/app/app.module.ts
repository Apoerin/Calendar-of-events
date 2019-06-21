import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService }  from './calendar.service';

import { AppComponent } from './app.component';
import { ModalContentComponent } from './modal-content/modal-content.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CalendarService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ],
  exports: [ AppComponent ]
})
export class AppModule { }
