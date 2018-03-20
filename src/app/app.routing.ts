import {
  RouterModule,
  Routes,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {ModulFormsComponent} from './modul-forms/modul-forms.component';

const routesConfig: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: ModulFormsComponent },
  { path: '**', redirectTo: 'main' }
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  //   enableTracing: true,
    // useHash: true
});
