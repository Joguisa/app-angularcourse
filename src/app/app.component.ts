import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './lib/shared/components/header/header.component';
import { FooterComponent } from './lib/shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bootcamp';

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/auth/sign-in' || this.router.url === '/auth/sign-up';
  }

  isNotLoginPage(): boolean {
    return !this.isLoginPage();
  }
}
