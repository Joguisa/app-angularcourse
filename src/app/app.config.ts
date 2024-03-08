import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NoAuthGuard } from './lib/auth/guards/no-auth-guard.guard';
import { AuthGuard } from './lib/auth/guards/auth-guard.guard';
import { provideHttpClient, withFetch } from '@angular/common/http';

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
    path: '',
    children: [
      {
        path: 'layouts',
        loadChildren: () =>
          import('./lib/layouts/layouts.module').then((m) => m.LayoutsModule),
      },
    ],
  },  
  { path: '**', redirectTo: 'auth' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()), 
    provideAnimationsAsync(),
    
    provideHttpClient(withFetch()),
  ]
};
