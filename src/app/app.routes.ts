import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./view/ui/select-view').then((m) => m.SelectView),
  },
];
