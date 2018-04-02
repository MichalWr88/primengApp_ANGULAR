import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModulMapComponent } from './modul-map.component';
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
  declarations: [ModulMapComponent]
})
export class ModulMapModule {}
