import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../models/team-meber.model';
import { TeamService } from '../../services/team.service';

/**
 * TeamPageComponent
 * 
 * Displays a list of team members on the team page.
 * Retrieves team member data from the TeamService.
 */
@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent implements OnInit {
  /** Array to hold the list of team members displayed on the page */
  teamMembers: TeamMember[] = [];

  /**
   * Constructs the TeamPageComponent.
   * @param teamService Service used to retrieve team member data.
   */
  constructor(private teamService: TeamService) { }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Retrieves the list of team members from the service.
   */
  ngOnInit() {
    this.teamMembers = this.teamService.getTeamMembers();
  }
}
