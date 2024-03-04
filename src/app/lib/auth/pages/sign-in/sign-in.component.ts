import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInInterfaceI } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  // imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup

  inputs!: SignInInterfaceI;

  emailForm: string = "jntnglln@gmail.com";
  passwordForm: string = "12345";
  response: string = "";

  dataForm: SignInInterfaceI = {
    email: '',
    password: ''
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  /**
   * Método para inicializar el componente
   */
  ngOnInit(): void {
    this.createForm();
    this.loginForm.valueChanges.subscribe((values) => {
      this.inputs = values;
    });
  }

  /**
   * Método para crear el formulario de login
   */
  createForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Método para realizar el login
   */
  login(){
    if (this.loginForm.invalid) {
      console.log('Formulario inválido');
      this.loginForm.markAllAsTouched();
      return;
    }

    let data : SignInInterfaceI = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.dataForm = data;

    if (data.email === this.emailForm && data.password === this.passwordForm) {
      this.response = "Datos correctos";
    } else {
      this.response = "Datos incorrectos";
    }

    // llamar al servicio cuando se lo cree

    console.log('data: ', data);
  }

  /**
   * Método para redirigir al formulario de registro
   */
  redirectSignUp() {
    this.router.navigate(['auth/sign-up']);
  }

}
