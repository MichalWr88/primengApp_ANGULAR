import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PrimengModule} from './primeng/primeng.module';
import { ModulFormsComponent } from './modul-forms/modul-forms.component';
import { ModulFormsService } from './modul-forms/modul-forms.service';
// import { ModulDataComponent } from './modul-data/modul-data.component';
import {ModulDataModule} from './modul-data/modul-data.module';
import { routerModule } from './app.routing';
import { ModulMapComponent } from './modul-map/modul-map.component';
import { ModulChartsComponent } from './modul-charts/modul-charts.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, ModulFormsComponent, ModulMapComponent, ModulChartsComponent],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModulDataModule,
    routerModule
  ],
  providers: [ModulFormsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
