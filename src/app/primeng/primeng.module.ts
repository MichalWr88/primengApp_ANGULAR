import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessagesModule } from 'primeng/messages';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import { CheckboxModule } from 'primeng/checkbox';
import { SpinnerModule } from 'primeng/spinner';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DataListModule } from 'primeng/datalist';
import { DialogModule } from 'primeng/dialog';
import { DataTableModule } from 'primeng/datatable';
import {GMapModule} from 'primeng/gmap';
import { ChartModule } from 'primeng/chart';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    KeyFilterModule,
    InputTextModule,
    CheckboxModule,
    SpinnerModule,
    TabMenuModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    CardModule,
    TooltipModule,
    DataListModule,
    DialogModule,
    DataTableModule,
    GMapModule,
    ChartModule
  ],
  declarations: [],
  exports: [
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    KeyFilterModule,
    InputTextModule,
    CheckboxModule,
    SpinnerModule,
    TabMenuModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    CardModule,
    TooltipModule,
    DataListModule,
    DialogModule,
    DataTableModule,
    GMapModule,
    ChartModule
  ]
})
export class PrimengModule {}
