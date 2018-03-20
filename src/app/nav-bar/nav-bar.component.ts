import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  template: `
<p-tabMenu [model]="items" [activeItem]="items[0]"></p-tabMenu>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {
  private items: MenuItem[];
  activeItem: MenuItem;
  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Forms', icon: 'fa-edit', routerLink: ['/forms'] },
      { label: 'Data', icon: 'fa-database', routerLink: ['/data'] },
      { label: 'Map', icon: 'fa-map', routerLink: ['/map'] },
      { label: 'Charts', icon: 'fa-bar-chart', routerLink: ['/charts'] }
    ];
  }
}
