import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./lib/auth/auth.module').then((m) => m.AuthModule),
      },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
    ],
  },
  {
    path: 'layouts',
    children: [
      {
        path: 'shopping-cart',
        loadChildren: () =>
          import('./lib/layouts/layouts.module').then((m) => m.LayoutsModule),
      },
    ],
  },  
  { path: '**', redirectTo: 'auth' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync()
  ]
};
