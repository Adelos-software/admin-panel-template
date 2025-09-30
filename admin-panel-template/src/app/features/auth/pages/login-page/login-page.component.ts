import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { UserCredentials } from '../../models/user-credentials.model';

/**
 * LoginPageComponent
 * 
 * Represents the login page of the admin panel.
 * Renders the login form and manages user authentication workflow.
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
  /** The slogan text displayed on the login page */
  slogan = '[Add your slogan here]';

  /**
   * Constructs the LoginPageComponent.
   * @param authService Service responsible for authentication logic.
   * @param router Angular Router used for navigation after login.
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Handles the login event emitted by the LoginFormComponent.
   * Authenticates the user and navigates to the dashboard if successful.
   * Displays an alert if authentication fails.
   * 
   * @param credentials The user's login credentials (username and password).
   */
  onLogin(credentials: UserCredentials) {
    if (this.authService.login(credentials)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}