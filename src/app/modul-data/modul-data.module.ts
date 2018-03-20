import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModulDataComponent} from './modul-data.component';
import {ModulDataService} from './modul-data.service';
import { HttpModule } from '@angular/http';
import {PrimengModule} from '../primeng/primeng.module';
@NgModule({
  imports: [CommonModule, HttpModule, PrimengModule],
  declarations: [ModulDataComponent],
  exports: [ModulDataComponent],
  providers: [ModulDataService]
})
export class ModulDataModule {}
