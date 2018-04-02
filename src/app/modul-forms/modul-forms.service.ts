import { Injectable } from '@angular/core';

@Injectable()
export class ModulFormsService {
  dishes: Array<any> = [
    {
      name: 'Pizza',
      types: this.cDropDownElem([
        'Margarita',
        'Neapolitan',
        'Chicago ',
        'Sicilian'
      ])
    },
    {
      name: 'Sushi',
      types: this.cDropDownElem(['Uramaki', 'Fitomaki', 'Weramaki'])
    },
    {
      name: 'Pasta',
      types: this.cDropDownElem(['Farfalle', 'Shells', 'Spagetti'])
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
    'I pick it up',
    'Delivery'
  ]);
  deliveryDetails: any = {
    City: '',
    StreetName: '',
    PostCode: '',
    Number: '',
    minDateValue: new Date(),
    dateDelivery: ''
  };

  order = {
    selectedDish: '',
    dishOptions:[],
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
