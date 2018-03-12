import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PrimengModule} from './primeng/primeng.module';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizFormService } from './quiz-form/quiz-form.service';

@NgModule({
  declarations: [AppComponent, NavBarComponent, QuizFormComponent],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [QuizFormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
