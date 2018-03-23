import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  orders: Array<any> = [];
  testOrder = {
    dish: 'pizza',
    type: 'margaritta',
    delivery: { type: 'pick it up' },
    extras: { type: 'Sake', count: 1 }
  };
  constructor() {}

  ngOnInit() {
      this.orders.push(this.testOrder);
  }
}
