import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NoAuthGuard } from './lib/auth/guards/no-auth-guard.guard';
import { AuthGuard } from './lib/auth/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        canActivate: [NoAuthGuard],
        path: 'auth',
        loadChildren: () =>
          import('./lib/auth/auth.module').then((m) => m.AuthModule),
      },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
    ],
  },
  {
    canActivate: [AuthGuard],
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
