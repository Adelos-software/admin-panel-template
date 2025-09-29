import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('./features/dashboard/pages/dashboard-page/dashboard-page.component')
  //       .then(m => m.DashboardPageComponent),
  //   canActivate: ['authGuard']
  // },
  { path: '**', redirectTo: 'login' }
];
