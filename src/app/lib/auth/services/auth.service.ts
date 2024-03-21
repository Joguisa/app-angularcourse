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
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  login(model: SignInInterfaceI): Observable<GeneralResponse<void>> {
    return this.http.post<GeneralResponse<void>>(
      `${this.urlApi}auth/login`,
      model
    );
  }

  clearTokenIfExist(): void {
    const token = this.getToken();
    if (token) {
      console.log('clearTokenIfExist');
      
      this.clearToken();
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  
  logout() {
    this.clearToken();
    this.router.navigateByUrl('/auth/sign-in');
  }
}
