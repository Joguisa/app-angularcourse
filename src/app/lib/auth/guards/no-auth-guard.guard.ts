import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const NoAuthGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  const router = inject(Router);
  if (token) {
    const url = router.createUrlTree(['/layouts/shopping-cart/list']);
    return url;
  }
  return true;
};
