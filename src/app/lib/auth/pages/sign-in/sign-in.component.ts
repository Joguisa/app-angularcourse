import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInInterfaceI } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup
  inputs!: SignInInterfaceI;
  protected onDestroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
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
          this.router.navigate(['layouts/list']);
          
        }
      },
      error: (err) => {
        this.toastr.error(err.message);
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
