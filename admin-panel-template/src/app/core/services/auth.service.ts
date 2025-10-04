import { Injectable, signal, computed } from '@angular/core';
import { USER_CREDENTIALS, USERS } from '../fake-db/fake-db';
import { User } from '../../shared/models/user.model';
import { UserCredentials } from '../../features/auth/models/user-credentials.model';

const SESSION_KEY = 'demo-session-user';

/**
 * AuthService
 *
 * Handles user authentication, session management, and exposes authentication state.
 * Utilizes a fake database for demonstration purposes.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   * Signal holding the currently authenticated user, or null if not authenticated.
   * Initialized from localStorage session if available.
   */
  readonly currentUser = signal<User | null>(this.loadSession());

  /**
   * Computed signal indicating whether a user is currently authenticated.
   */
  readonly isLoggedIn = computed(() => this.currentUser() !== null);

  /**
   * Attempts to log in with the provided credentials.
   * If successful, sets the current user and saves the session to localStorage.
   * If authentication fails, clears the current user and removes any session data.
   *
   * @param credentials The user's login credentials.
   * @returns True if login is successful, false otherwise.
   */
  login(credentials: UserCredentials): boolean {
    const found = USER_CREDENTIALS.find(
      cred =>
        cred.username === credentials.username &&
        cred.password === credentials.password
    );

    if (!found) {
      this.currentUser.set(null);
      localStorage.removeItem(SESSION_KEY);
      return false;
    }

    const user = USERS.find(u => u.id === found.userId) || null;
    this.currentUser.set(user);

    // Save fake session to localStorage
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }

    return true;
  }

  /**
   * Logs out the current user by clearing the authentication state
   * and removing the session from localStorage.
   */
  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem(SESSION_KEY);
  }

  /**
   * Loads the user session from localStorage, if available.
   *
   * @returns The user object if a session exists, otherwise null.
   */
  private loadSession(): User | null {
    const stored = localStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) as User : null;
  }
}
