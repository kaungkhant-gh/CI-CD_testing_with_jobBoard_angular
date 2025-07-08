import { Component, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrls: ['./login.component.css'],
  standalone: true,
})
export class LoginComponent {
  email = signal('');
  password = signal('');

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email(), this.password()).subscribe({
      next: () => this.router.navigate(['/joblist']),
      error: () => alert('Login failed'),
    });
  }
}
