import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./lib/auth/auth.module').then((m) => m.AuthModule),
      },
      { path: '**', redirectTo: 'auth', pathMatch: 'full' },
    ],
  },
];
