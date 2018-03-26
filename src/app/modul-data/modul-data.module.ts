import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModulDataComponent} from './modul-data.component';
import {ModulDataService} from './modul-data.service';
import { HttpModule } from '@angular/http';
import {PrimengModule} from '../primeng/primeng.module';
    import { HttpClientModule } from '@angular/common/http';
    import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PrimengModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [ModulDataComponent],
  providers: [ModulDataService],
  exports: []
})
export class ModulDataModule {}
