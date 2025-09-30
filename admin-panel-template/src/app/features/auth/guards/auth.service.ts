import { AuthService } from '../../../core/services/auth.service';
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

/**
 * authGuard
 * 
 * Route guard function to protect routes from unauthorized access.
 * Checks if the user is authenticated using AuthService.
 * If authenticated, allows route activation; otherwise, redirects to the login page.
 * 
 * @returns {boolean} True if authenticated, false otherwise.
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    // User is authenticated; allow access to the route
    return true;
  } else {
    // User is not authenticated; redirect to login page
    router.navigate(['/login']);
    return false;
  }
}