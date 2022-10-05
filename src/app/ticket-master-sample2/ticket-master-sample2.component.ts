import { Component } from '@angular/core';
import { TicketMasterService } from '../ticket-master.service';

@Component({
  selector: 'app-ticket-master-sample2',
  templateUrl: './ticket-master-sample2.component.html',
  styleUrls: ['./ticket-master-sample2.component.css'],
})
export class TicketMasterSample2Component {
  events$ = this._ticketMasterService.events$;
  constructor(private _ticketMasterService: TicketMasterService) {}
}
