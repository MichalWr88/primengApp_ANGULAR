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
import { SectionHomeModule } from './section-home/section-home.module';
import {ModulMapModule} from './section-map/section-map.module';
import { ModulChartsModule } from './modul-charts/modul-charts.module';
import { ErrorMesssageComponent } from './error-messsage.component';



@NgModule({
  declarations: [AppComponent, NavBarComponent, ErrorMesssageComponent],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModulDataModule,
    routerModule,
    SectionHomeModule,
    ModulMapModule,
    ModulChartsModule,
    ModulFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
