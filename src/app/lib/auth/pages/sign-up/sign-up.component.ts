import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpInterfaceI } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  // imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {

  //@Input() isUserRegistered: boolean = false;

  signUpForm!: FormGroup;
  isDisabled: boolean = true;
  constructor(private fb: FormBuilder, private router: Router) {}

  /**
   * Método para inicializar el componente
   */
  ngOnInit(): void {
    this.createForm();
    
  }

  /**
   * Método para crear el formulario de login
   */
  createForm() {
    this.signUpForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Método para realizar el login
   */
  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    let data : SignUpInterfaceI = {
      firstname: this.signUpForm.get('firstname')?.value,
      lastname: this.signUpForm.get('lastname')?.value,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value,
      confirmpassword: this.signUpForm.get('confirmpassword')?.value
    }

    if (data.password === data.confirmpassword) {
      this.router.navigate(['auth/sign-in']);
    }
  }

  checkPasswords() {
    if (this.signUpForm.get('password')?.value !== this.signUpForm.get('confirmpassword')?.value) {
        this.signUpForm.get('confirmpassword')?.setErrors({ passwordNotMatch: true });
    } else {
        this.signUpForm.get('confirmpassword')?.setErrors(null);
        this.isDisabled = !this.isDisabled;
    }
}


  /**
   * Método para redirigir al formulario de autenticación
   */
  redirectSignIn() {
    this.router.navigate(['auth/sign-in']);
  }
}
