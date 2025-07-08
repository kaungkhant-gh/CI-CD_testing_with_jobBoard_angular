import { Component, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [CommonModule, FormsModule, RouterLink],
  styleUrls: ['./register.component.css'],
  standalone: true,
})
export class RegisterComponent {
  username = signal('');
  email = signal('');
  password = signal('');

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth
      .register(this.username(), this.email(), this.password())
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: () => alert('Registration failed'),
      });
  }
}
