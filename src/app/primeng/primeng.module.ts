import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule
  ],
  declarations: [],
  exports: [
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule
  ]
})
export class PrimengModule {}
