import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { authGuard } from './features/auth/guards/auth.service';

/**
 * Application configuration for the Angular app.
 * 
 * - Registers application-wide providers.
 * - Configures the router with defined routes and enables component input binding.
 * - Provides the authentication guard for route protection.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // Sets up routing with input binding support
    { provide: 'authGuard', useValue: authGuard }       // Registers the authentication guard
  ]
};
