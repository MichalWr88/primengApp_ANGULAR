import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  template: `
<p-tabMenu styleClass="nav" [model]="items" ></p-tabMenu>
  `,
  styles: [
    `p-tabMenu /deep/ .ui-tabmenu{
      padding:0;
      margin-bottom:10px;}
   p-tabMenu /deep/ .ui-tabmenu .ui-state-active a{
       background-color:lightgrey;
        color:white;
    }`
  ]
})
export class NavBarComponent implements OnInit {
  private items: MenuItem[];
  activeItem: MenuItem;
  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'fa-home', routerLink: ['/home'] },
      { label: 'Forms', icon: 'fa-edit', routerLink: ['/forms'] },
      { label: 'Data', icon: 'fa-database', routerLink: ['/data'] },
      { label: 'Map', icon: 'fa-map', routerLink: ['/maps'] },
      { label: 'Charts', icon: 'fa-bar-chart', routerLink: ['/charts'] }
    ];
  }
}
