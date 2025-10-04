import { Injectable } from "@angular/core";
import { TEAM_MEMBERS } from "../../../core/fake-db/fake-db";
import { TeamMember } from "../models/team-meber.model";

@Injectable({ providedIn: 'root' })
export class TeamService {
  getTeamMembers(): TeamMember[] {
    return TEAM_MEMBERS;
  }
}