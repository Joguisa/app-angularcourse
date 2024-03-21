import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './lib/shared/components/header/header.component';
import { FooterComponent } from './lib/shared/components/footer/footer.component';
import { AuthService } from './lib/auth/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Bootcamp';

  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.clearTokenIfExist();
  }

  isLoginPage(): boolean {
    return this.router.url === '/auth/sign-in' || this.router.url === '/auth/sign-up';
  }

  isNotLoginPage(): boolean {
    return !this.isLoginPage();
  }
}
