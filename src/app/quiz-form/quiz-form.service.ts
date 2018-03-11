import { Injectable } from '@angular/core';

@Injectable()
export class QuizFormService {
  dishes: Array<any> = [
    {
      name: 'Pizza',
      types: this.cDropDownElem([
        'Margarita',
        'Na grubym  z pieczarkami',
        'wege'
      ])
    },
    {
      name: 'Sushi',
      types: this.cDropDownElem(['uramaki', 'fitomaki', 'weramaki']),
      extrats: this.cObjExtras([
        'wasabi',
        'sake',
        'option3',
        'option4',
        'extra rise'
      ])
    },
    {
      name: 'Pasta',
      types: this.cDropDownElem(['tuti dimare', 'Formaggi', 'Spagetti']),
      extrats: this.cObjExtras([
        'extra sos',
        'sake',
        'option3',
        'option4',
        'extra chees'
      ])
    }
  ];

  typeOfCollection: Array<any> = this.cDropDownElem([
    'i pick it up',
    'Delivery'
  ]);
  deliveryDetails: any = {
    City: '',
    StreetName: '',
    PostCode: '',
    Number: '',
    minDateValue: '',
    dateDelivery: ''
  };

  order = {
    selectedDish: '',
    delivery: { type: this.typeOfCollection[0] }
  };

  // FUNCTIONS

  cDropDownElem(arr) {
    const tempArray = [];
    arr.forEach((element, index) => {
      const obj = {
        label: element,
        value: { id: index + 1, name: element }
      };
      tempArray.push(obj);
    });

    return tempArray;
  }
  cObjExtras(arr): any {
    const tempArr = [];
    arr.forEach(element => {
      const tempObj = {
        label: element,
        checked: false,
        count: 1
      };
      tempArr.push(tempObj);
    });
    return tempArr;
  }
  constructor() {}
}
