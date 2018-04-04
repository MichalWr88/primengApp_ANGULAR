import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ModulFormsComponent } from './modul-forms/modul-forms.component';
import { SectionHomeComponent } from './section-home/section-home.component';
import {ModulDataComponent} from './modul-data/modul-data.component';
import {SectionMapComponent} from './section-map/section-map.component';

import { ModulChartsComponent } from './modul-charts/modul-charts.component';


const routesConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'forms', component: ModulFormsComponent },
  { path: 'home', component: SectionHomeComponent },
  { path: 'maps', component: SectionMapComponent },
  { path: 'charts', component: ModulChartsComponent },
  { path: 'data', component: ModulDataComponent },
  { path: '**', redirectTo: 'home' }
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  //   enableTracing: true,
  // useHash: true
});
