import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedInSignal = signal(false);

  login(email: string, password: string): boolean {
    if (email && password) {
      this.isLoggedInSignal.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedInSignal.set(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSignal();
  }
}
