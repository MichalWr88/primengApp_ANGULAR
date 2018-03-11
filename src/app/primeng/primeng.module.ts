import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    DropdownModule
  ],
  declarations: [],
  exports: [ButtonModule, TabViewModule, RadioButtonModule, DropdownModule]
})
export class PrimengModule {}
