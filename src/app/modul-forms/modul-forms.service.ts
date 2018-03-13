import { Injectable } from '@angular/core';

@Injectable()
export class ModulFormsService {
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
      types: this.cDropDownElem(['uramaki', 'fitomaki', 'weramaki'])
    },
    {
      name: 'Pasta',
      types: this.cDropDownElem(['tuti dimare', 'Formaggi', 'Spagetti'])
    }
  ];

  extrats: Array<any> = this.cObjExtras([
    'Sake',
    'Coke',
    'Ketchup',
    'Juice',
    'Water'
  ]);

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
    delivery: {}
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
        count: 1,
      };
      tempArr.push(tempObj);
    });
    return tempArr;
  }
  constructor() {}
}
