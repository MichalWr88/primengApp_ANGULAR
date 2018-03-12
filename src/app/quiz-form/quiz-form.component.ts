import { Component, OnInit } from '@angular/core';
import { QuizFormService } from './quiz-form.service';
import {
  Form,
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  dishes: Array<any>;
  order: any;
  deliveryType: String = '';
  deliveryDetails: any;
  typeOfCollection: Array<any>;
  orderForm: FormGroup;
  submitted: boolean;
  constructor(private quizService: QuizFormService, private fb: FormBuilder) {
    this.dishes = this.quizService.dishes;
    this.order = this.quizService.order;
    this.typeOfCollection = this.quizService.typeOfCollection;
    this.deliveryDetails = this.quizService.deliveryDetails;
  }
  onSubmit(form) {
    console.log(form);
  }
  ngOnInit() {
    console.log(this.deliveryDetails);
    this.deliveryDetails.minDatevalue = new Date();
    this.deliveryDetails.dateDelivery = this.deliveryDetails.minDatevalue
    this.order.delivery = this.quizService.typeOfCollection[0].value;
    this.orderForm = this.fb.group({
      dishType: new FormControl('', Validators.required),
      deliveryType: new FormControl('', Validators.required),
      deliveryDate: new FormControl(''),


    });
  }
}
