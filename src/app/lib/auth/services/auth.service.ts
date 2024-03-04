import { Injectable } from '@angular/core';
import { SignInInterfaceI } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data!: SignInInterfaceI;
  constructor() { }

  login(email = "jntnglln@gmai.com", password = "12345"){
    if (email === this.data.email && password === this.data.password) {
    }
  }
}
