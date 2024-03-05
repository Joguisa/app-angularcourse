import { Injectable } from '@angular/core';
import { SignInInterfaceI } from '../interfaces/auth.interface';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse } from '../../shared/interfaces/general-responsive.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi: string = environment.endPoint;

  constructor(private http: HttpClient) { }

  login(model: SignInInterfaceI) : Observable<GeneralResponse<void>> {
    return this.http.post<GeneralResponse<void>>(`${this.urlApi}auth//login`, model);
  }
}
