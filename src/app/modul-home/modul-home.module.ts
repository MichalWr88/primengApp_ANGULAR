import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModulHomeComponent} from './modul-home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ModulHomeComponent],
  exports: [ModulHomeComponent]
})
export class ModulHomeModule {}
