import { Injectable } from '@angular/core';
import { SignInInterfaceI } from '../interfaces/auth.interface';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse } from '../../shared/interfaces/general-responsive.interface';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlApi: string = environment.endPoint;

  constructor(private http: HttpClient, private router: Router) {}

  login(model: SignInInterfaceI): Observable<GeneralResponse<void>> {
    return this.http.post<GeneralResponse<void>>(
      `${this.urlApi}auth/login`,
      model
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/sign-in');
  }
}
