import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TicketMasterService } from './ticket-master.service';
import { HttpClientModule } from '@angular/common/http';
import { TicketMasterSample1Component } from './ticket-master-sample1/ticket-master-sample1.component';
import { TicketMasterSample2Component } from './ticket-master-sample2/ticket-master-sample2.component';
import { TicketMasterSample0Component } from './ticket-master-sample0/ticket-master-sample0.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TicketMasterSample0Component,
    TicketMasterSample1Component,
    TicketMasterSample2Component,
  ],
  bootstrap: [AppComponent],
  providers: [TicketMasterService],
})
export class AppModule {}
