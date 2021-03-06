// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BusTimeTableRoutingModule } from './bustimetable-routing.module';
import { BusTimeTableComponent } from './bustimetable.component'; 
import { BusTimeTableService } from './bustimetable.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BusTimeTableRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),

    NgSelectModule,
    DataTablesModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule,
    ModalModule.forRoot()
  ],
  declarations: [
    BusTimeTableComponent,
  ],
  providers: [
    BusTimeTableService
  ]
})
export class BusTimeTableModule { }
