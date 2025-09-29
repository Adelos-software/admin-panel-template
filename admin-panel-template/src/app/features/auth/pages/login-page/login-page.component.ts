import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

/**
 * LoginPageComponent
 * 
 * This component serves as the login page for the admin panel.
 * It displays a login form and handles user authentication.
 */
@Component({
  selector: 'app-login-page', 
  standalone: true,          
  imports: [LoginFormComponent], 
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  /** Slogan displayed on the login page */
  slogan = 'Add your slogan here';

  /**
   * Initializes the LoginPageComponent.
   * @param authService Service for handling authentication logic
   * @param router Angular Router for navigation
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Handles the login event emitted by the LoginFormComponent.
   * Authenticates the user and navigates to the dashboard on success.
   * Displays an alert on authentication failure.
   * 
   * @param credentials Object containing username and password
   */
  onLogin(credentials: { username: string; password: string }) {
    if (this.authService.login(credentials.username, credentials.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}