import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * LoginFormComponent
 * 
 * This component provides a simple login form with username and password fields.
 * It emits a login event containing the entered credentials when the form is submitted.
 */
@Component({
  selector: 'app-login-form', 
  standalone: true,           
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  /** Stores the value of the username input field */
  username = '';

  /** Stores the value of the password input field */
  password = '';

  companyName = '[Company name]';

  /**
   * Emits the login event with the user's credentials.
   * The parent component can subscribe to this event to handle authentication.
   */
  @Output() login = new EventEmitter<{ username: string; password: string }>();

  /**
   * Handles form submission.
   * Emits the login event with the current username and password values.
   */
  onSubmit() {
    this.login.emit({ username: this.username, password: this.password });
  }
}