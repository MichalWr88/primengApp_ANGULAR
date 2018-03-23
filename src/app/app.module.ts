import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PrimengModule} from './primeng/primeng.module';
import {ModulFormsModule} from './modul-forms/modul-forms.module';
import {ModulDataModule} from './modul-data/modul-data.module';
import {ModulHomeModule} from './modul-home/modul-home.module';
import {ModulMapModule} from './modul-map/modul-map.module';
import { ModulChartsModule } from './modul-charts/modul-charts.module';



@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModulDataModule,
    routerModule,
    ModulHomeModule,
    ModulMapModule,
    ModulChartsModule,
    ModulFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
