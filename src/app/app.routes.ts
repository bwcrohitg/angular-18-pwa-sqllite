import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tab1',
    loadComponent: () =>
      import('./tab-1/tab-1.component').then((m) => m.Tab1Component),
  },
  {
    path: 'tab2',
    loadComponent: () =>
      import('./tab-2/tab-2.component').then((m) => m.Tab2Component),
  },
  {
    path: 'tab3',
    loadComponent: () =>
      import('./tab-3/tab-3.component').then((m) => m.Tab3Component),
  },
];
