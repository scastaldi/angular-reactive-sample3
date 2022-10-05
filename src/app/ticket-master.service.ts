import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  from,
  map,
  mergeAll,
  switchMap,
  of,
  lastValueFrom,
  mergeMap,
} from 'rxjs';
import { TicketMasterEvent, TicketMasterRoot } from './ticket-master.interface';

@Injectable()
export class TicketMasterService {
  url = `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=Tampa&locale=*&size=5&page=1`;

  constructor(private _httpClient: HttpClient) {}

  public getEvent0() {
    // example of old way of returning promises
    return this._httpClient.get<TicketMasterRoot>(this.url).toPromise();

    // return lastValueFrom(this._httpClient.get<TicketMasterRoot>(this.url));
  }

  public getEvents() {
    return this._httpClient
      .get<TicketMasterRoot>(this.url)
      .pipe(mergeMap((root) => of(root._embedded.events)));
  }

  public events$ = this._httpClient
    .get<TicketMasterRoot>(this.url)
    .pipe(mergeMap((root) => of(root._embedded.events)));
}
