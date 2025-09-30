import { Injectable, signal, computed } from '@angular/core';
import { USER_CREDENTIALS, USERS } from '../fake-db/fake-db';
import { User } from '../../shared/models/user.model';
import { UserCredentials } from '../../features/auth/models/user-credentials.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  // Signals
  readonly currentUser = signal<User | null>(null);
  readonly isLoggedIn = computed(() => this.currentUser() !== null);

  /**
   * Attempts to log in with provided credentials
   */
  login(credentials: UserCredentials): boolean {
    const found = USER_CREDENTIALS.find(
      cred =>
        cred.username === credentials.username &&
        cred.password === credentials.password
    );

    if (!found) {
      this.currentUser.set(null);
      return false;
    }

    const user = USERS.find(u => u.id === found.userId) || null;
    this.currentUser.set(user);
    return true;
  }

  /**
   * Logs out the current user
   */
  logout(): void {
    this.currentUser.set(null);
  }
}
