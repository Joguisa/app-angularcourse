import { CanActivateFn } from '@angular/router';

export const NoAuthGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return true;
  }
  return false;
};
