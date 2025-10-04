import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../models/team-meber.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent implements OnInit {
  teamMembers: TeamMember[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamMembers = this.teamService.getTeamMembers();
  }
}
