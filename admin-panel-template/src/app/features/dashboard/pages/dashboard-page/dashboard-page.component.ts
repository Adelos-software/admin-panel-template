import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SidebarComponent, RouterModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  constructor(public dashboardService: DashboardService) { }
}
