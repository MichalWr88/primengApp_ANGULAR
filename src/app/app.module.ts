import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PrimengModule} from './primeng/primeng.module';
import { ModulFormsComponent } from './modul-forms/modul-forms.component';
import { ModulFormsService } from './modul-forms/modul-forms.service';
import { ModulDataComponent } from './modul-data/modul-data.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, ModulFormsComponent, ModulDataComponent],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ModulFormsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
