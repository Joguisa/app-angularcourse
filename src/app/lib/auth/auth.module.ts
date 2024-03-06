import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    ToastrService,
    provideAnimationsAsync()
  ]
})
export class AuthModule { }
