import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpInterfaceI } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  // imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  /**
   * Método para realizar el login
   */
  signIn(){
    if (this.signUpForm.invalid) {
      console.log('Formulario inválido');
      
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

    // llamar al servicio

    console.log('data: ', data);
  }

  /**
   * Método para redirigir al formulario de autenticación
   */
  redirectSignIn() {
    this.router.navigate(['auth/sign-in']);
  }

}
