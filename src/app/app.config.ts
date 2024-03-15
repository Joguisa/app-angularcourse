import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NoAuthGuard } from './lib/auth/guards/no-auth-guard.guard';
import { AuthGuard } from './lib/auth/guards/auth-guard.guard';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './lib/core/error.interceptor';
import { provideToastr } from 'ngx-toastr';

const routes: Routes = [
  {
    canActivate: [NoAuthGuard],
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
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()), 
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimationsAsync(),
    provideToastr(),
    provideHttpClient(withFetch()),
  ]
};
