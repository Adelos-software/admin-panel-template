import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCredentials } from '../../models/user-credentials.model';

/**
 * LoginFormComponent
 *
 * Provides a user interface for entering login credentials.
 * Emits a login event with the entered username and password when the form is submitted.
 */
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  /** Holds the username entered by the user */
  username = '';

  /** Holds the password entered by the user */
  password = '';

  /** Displays the company name in the form */
  companyName = '[Company name]';

  /**
   * EventEmitter that emits the user's credentials when the form is submitted.
   * The parent component should handle authentication logic upon receiving this event.
   */
  @Output() login = new EventEmitter<UserCredentials>();

  /**
   * Called when the login form is submitted.
   * Emits the login event with the current username and password.
   */
  onSubmit() {
    this.login.emit({ username: this.username, password: this.password });
  }
}