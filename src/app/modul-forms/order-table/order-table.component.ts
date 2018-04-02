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

  constructor() {

  }

  ngOnInit() {
  }
}
