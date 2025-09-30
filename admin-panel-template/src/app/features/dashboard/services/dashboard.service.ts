import { AuthService } from './../../../core/services/auth.service';
import { computed, Injectable } from '@angular/core';

/**
 * DashboardService
 * 
 * Provides dashboard-related functionality and exposes the currently authenticated user.
 * Utilizes AuthService to retrieve user information.
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  /**
   * Constructs the DashboardService.
   * @param authService Service for accessing authentication and user data.
   */
  constructor(private authService: AuthService) { }

  public readonly  currentUser = computed(() => {
    return this.authService.currentUser();
  });

}
