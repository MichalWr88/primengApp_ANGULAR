import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ModulFormsComponent } from './modul-forms/modul-forms.component';
import { ModulHomeComponent } from './modul-home/modul-home.component';
import {ModulDataComponent} from './modul-data/modul-data.component';
import {ModulMapComponent} from './modul-map/modul-map.component';

import { ModulChartsComponent } from './modul-charts/modul-charts.component';


const routesConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'forms', component: ModulFormsComponent },
  { path: 'home', component: ModulHomeComponent },
  { path: 'maps', component: ModulMapComponent },
  { path: 'charts', component: ModulChartsComponent },
  { path: 'data', component: ModulDataComponent },
  { path: '**', redirectTo: 'home' }
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  //   enableTracing: true,
  // useHash: true
});
