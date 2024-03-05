import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInInterfaceI } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  // imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  //@Output() userRegistered: EventEmitter<boolean> = new EventEmitter<boolean>();

  
  loginForm!: FormGroup
  inputs!: SignInInterfaceI;
  protected onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
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
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }


  /**
   * Método para crear el formulario de login
   */
  createForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
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
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
   
    this.authService.login(data)
    .pipe(takeUntil(this.onDestroy))
    .subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['layouts/shopping-cart']);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  /**
   * Método para redirigir al formulario de registro
   */
  redirectSignUp() {
    this.router.navigate(['auth/sign-up']);
  }

}
