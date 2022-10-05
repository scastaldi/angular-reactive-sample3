import { Component, OnInit } from '@angular/core';
import { TicketMasterService } from '../ticket-master.service';

@Component({
  selector: 'app-ticket-master-sample0',
  templateUrl: './ticket-master-sample0.component.html',
  styleUrls: ['./ticket-master-sample0.component.css'],
})
export class TicketMasterSample0Component implements OnInit {
  data: any;
  constructor(private _service: TicketMasterService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._service.getEvent0().then((data) => {
      this.data = data._embedded.events;
    });;
  }
}
