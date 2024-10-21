import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        title: 'Accueil',
      },
      {
        path: 'local',
        loadComponent: () =>
          import(
            './pages/internationalization/internationalization.component'
          ).then((c) => c.InternationalizationComponent),
        title: 'Local',
      },
    ],
  },
];
