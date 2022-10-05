import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  from,
  interval,
  Observable,
  of,
  tap,
  take,
  map,
  mergeAll,
  Subscription,
} from 'rxjs';
import { TicketMasterService } from '../ticket-master.service';
import { TicketMasterEvent } from '../ticket-master.interface';

@Component({
  selector: 'app-ticket-master-sample1',
  templateUrl: './ticket-master-sample1.component.html',
  styleUrls: ['./ticket-master-sample1.component.css'],
})
export class TicketMasterSample1Component implements OnInit, OnDestroy {
  events: TicketMasterEvent[];
  sub: Subscription;
  constructor(private _ticketMasterService: TicketMasterService) {}

  ngOnInit(): void {
    this.sub = this._ticketMasterService
      .getEvents()
      .subscribe((events) => (this.events = events));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
