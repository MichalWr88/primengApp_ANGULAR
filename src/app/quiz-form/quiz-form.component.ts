import { Component, OnInit } from '@angular/core';
import { QuizFormService } from './quiz-form.service';
@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  dishes: Array<any>;
  order: any;
  constructor(private quizService: QuizFormService) {
    this.dishes = this.quizService.dishes;
    this.order = this.quizService.order;
  }

  ngOnInit() {
    console.log(this.dishes);
  }
}
