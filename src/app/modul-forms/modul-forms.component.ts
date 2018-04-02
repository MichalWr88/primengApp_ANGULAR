import { Component, OnInit, Output } from '@angular/core';
import { ModulFormsService } from './modul-forms.service';
import { OrderTableComponent } from './order-table/order-table.component';
import { PrimengModule } from '../primeng/primeng.module';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-modul-forms',
  templateUrl: './modul-forms.component.html',
  styleUrls: ['./modul-forms.component.css']
})
export class ModulFormsComponent implements OnInit {
  extrats: Array<any>;
  dishes: Array<any>;
  order: any = {};

  @Output() orders: Array<any> = [];

  deliveryType: String = '';
  deliveryDetails: any;
  typeOfCollection: Array<any>;
  orderForm: FormGroup;
  submitted: boolean;
  formattedMessage: string;
  constructor(
    private modulFormsService: ModulFormsService,
    private fb: FormBuilder
  ) {
    this.dishes = this.modulFormsService.dishes;
    this.typeOfCollection = this.modulFormsService.typeOfCollection;
  }

  ngOnInit() {
    this.deliveryDetails = this.modulFormsService.deliveryDetails;

    this.deliveryDetails.dateDelivery = new Date();
    this.extrats = this.modulFormsService.extrats;

    this.orderForm = this.generateorderForm();
    this.watchChangesForm();
  }

  onSubmit(form) {
    this.order = form;
    this.order.extrats = [form.Sake, form.Coke, form.Ketchup, form.Juice, form.Water];
    this.orders.push(this.order);
    console.log(this.orders);
    this.clearForm();
  }
  clearForm() {
    this.orderForm.reset({
      dishType: '',
      deliveryType: 'i pick it up'
    });
  }
  generateorderForm() {
    return this.fb.group({
      dishType: new FormControl('', Validators.required),
      deliveryType: new FormControl('i pick it up', Validators.required),
      deliveryDate: new FormControl(this.deliveryDetails.minDateValue),
      typeDish: new FormControl('', Validators.required),

      deliveryPlace: this.fb.group({
        city: '',
        street: '',
        number: '',
        postCode: ''
      }),
      Sake: this.fb.group({
        check: false,
        count: ''
      }),
      Coke: this.fb.group({
        check: false,
        count: ''
      }),
      Ketchup: this.fb.group({
        check: false,
        count: ''
      }),
      Juice: this.fb.group({
        check: false,
        count: ''
      }),
      Water: this.fb.group({
        check: false,
        count: ''
      })
    });
  }
  watchChangesForm() {
    this.orderForm.controls.Sake.get('count').disable();
    this.orderForm.get('dishType').valueChanges.subscribe(val => {
      this.orderForm.get('typeDish').reset();
      console.log(val);
    });
    this.orderForm.get('typeDish').valueChanges.subscribe(obj => {});

    this.orderForm.get('deliveryType').valueChanges.subscribe(val => {
      const city = this.orderForm.get('deliveryPlace').get('city'),
        street = this.orderForm.get('deliveryPlace').get('street'),
        number = this.orderForm.get('deliveryPlace').get('number'),
        postCode = this.orderForm.get('deliveryPlace').get('postCode');

      if (val.name !== 'Delivery') {
        city.disable();
        city.clearValidators();
        street.disable();
        street.clearValidators();
        number.disable();
        number.clearValidators();
        postCode.disable();
        postCode.clearValidators();
      } else {
        city.enable();
        city.setValidators([Validators.required, Validators.minLength(3)]);
        street.enable();
        street.setValidators([Validators.required, Validators.minLength(3)]);
        number.enable();
        number.setValidators(Validators.required);
        postCode.enable();
        postCode.setValidators(Validators.required);
      }
    });
    this.takeExtrasValid(this.orderForm, this.orderForm.controls.Sake, 'Sake');
    this.takeExtrasValid(this.orderForm, this.orderForm.controls.Coke, 'Coke');
    this.takeExtrasValid(
      this.orderForm,
      this.orderForm.controls.Ketchup,
      'Ketchup'
    );
    this.takeExtrasValid(
      this.orderForm,
      this.orderForm.controls.Juice,
      'Juice'
    );
    this.takeExtrasValid(
      this.orderForm,
      this.orderForm.controls.Water,
      'Water'
    );
  }

  get diagnostic() {
    return JSON.stringify(this.orderForm.value);
  }

  takeExtrasValid(form, parent, text) {
    form
      .get(text)
      .get('check')
      .valueChanges.subscribe(val => {
        const count = parent.get('count');
        if (val === true) {
          count.enable();
          count.setValue(1);
        } else {
          count.disable();
        }
      });
  }
}
