import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { CustomerInfoPageComponent } from './pages/customer-info-page/customer-info-page.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      { path: 'customers', component: CustomersPageComponent },
      { path: 'customers/:id', component: CustomerInfoPageComponent },
      { path: 'team', component: TeamPageComponent },
      { path: '', redirectTo: 'customers', pathMatch: 'full' }
    ]
  }
];
