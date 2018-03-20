import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PrimengModule} from '../primeng/primeng.module';

import {ModulFormsComponent} from './modul-forms.component';
import { ModulFormsService } from './modul-forms.service';

@NgModule({
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
  declarations: [ModulFormsComponent],
  providers: [ModulFormsService],
  exports: []
})
export class ModulFormsModule {}
