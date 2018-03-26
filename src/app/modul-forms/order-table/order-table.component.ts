import { Component, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  public static yourString: Subject<String> = new Subject<string>();
  @Input() orders = [];

  testOrder = {
    dishType: 'pizza',
    type: 'margaritta',
    delivery: { type: 'pick it up' },
    extras: { type: 'Sake', count: 1 }
  };
  // addOrder(){
  //     this.orders.push(this.order);
  // }

  constructor() {
      this.orders.push(this.testOrder);
  }

  ngOnInit() {
 
    this.orders.push(this.testOrder);
    console.log(this.orders);
  }
}
