import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionMapComponent } from './section-map.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [SectionMapComponent]
})
export class ModulMapModule {}
