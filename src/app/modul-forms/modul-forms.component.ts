import { Component, OnInit } from '@angular/core';
import { ModulFormsService } from './modul-forms.service';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-modul-forms',
  templateUrl: './modul-forms.component.html',
  styleUrls: ['./modul-forms.component.css']
})
export class ModulFormsComponent implements OnInit {
  extrats: Array<any>;
  dishes: Array<any>;
  order: any;
  deliveryType: String = '';
  deliveryDetails: any;
  typeOfCollection: Array<any>;
  orderForm: FormGroup;
  submitted: boolean;
  constructor(
    private modulFormsService: ModulFormsService,
    private fb: FormBuilder
  ) {
    this.dishes = this.modulFormsService.dishes;
    this.order = this.modulFormsService.order;
    this.typeOfCollection = this.modulFormsService.typeOfCollection;
    this.deliveryDetails = this.modulFormsService.deliveryDetails;
  }
  onSubmit(form) {
    console.log(form);
  }
  clearForm() {
    this.orderForm.reset({
      dishType: '',
      deliveryType: { id: 1, name: 'i pick it up' }
    });
  }

  get diagnostic() {
    return JSON.stringify(this.orderForm.value);
  }
  checkDelivery(obj) {}
  ngOnInit() {
    console.log(this.deliveryDetails);
    this.deliveryDetails.minDatevalue = new Date();
    this.deliveryDetails.dateDelivery = this.deliveryDetails.minDatevalue;
    this.extrats = this.modulFormsService.extrats;
    this.order.delivery = this.modulFormsService.typeOfCollection[0].value;
    this.orderForm = this.fb.group({
      dishType: new FormControl('', Validators.required),
      deliveryType: new FormControl('', Validators.required),
      deliveryDate: new FormControl(''),
      city: new FormControl(
        '',
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      street: new FormControl(
        '',
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
      postCode: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      typeDish: new FormControl('', Validators.required),
      Sake: new FormControl(),
      Coke: new FormControl(''),
      Ketchup: new FormControl(''),
      Juice: new FormControl(''),
      Water: new FormControl(''),
      CSake: new FormControl(''),
      CCoke: new FormControl(''),
      CKetchup: new FormControl(''),
      CJuice: new FormControl(''),
      CWater: new FormControl('')
    });
    console.log(this.orderForm);
  }
}
