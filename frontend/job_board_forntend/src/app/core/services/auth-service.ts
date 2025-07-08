import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

const API = 'http://localhost:1337/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token = signal<string | null>(localStorage.getItem('token'));
  user = signal<any | null>(null);

  login(identifier: string, password: string) {
    return this.http
      .post<{ jwt: string; user: any }>(`${API}/auth/local`, {
        identifier,
        password,
      })
      .pipe(
        tap((res) => {
          this.token.set(res.jwt);
          this.user.set(res.user);
          localStorage.setItem('token', res.jwt);
          localStorage.setItem('user', JSON.stringify(res.user));
        })
      );
  }

  register(username: string, email: string, password: string) {
    return this.http
      .post<{ jwt: string; user: any }>(`${API}/auth/local/register`, {
        username,
        email,
        password,
      })
      .pipe(
        tap((res) => {
          this.token.set(res.jwt);
          this.user.set(res.user);
          localStorage.setItem('token', res.jwt);
          localStorage.setItem('user', JSON.stringify(res.user));
        })
      );
  }

  logout() {
    this.token.set(null);
    this.user.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated = computed(() => !!this.token());
}
