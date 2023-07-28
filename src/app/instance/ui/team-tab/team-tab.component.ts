import { Component, Input } from '@angular/core';
import { ITeamMember } from 'src/app/interfaces/team-member.interface';

@Component({
  selector: 'app-team-tab',
  templateUrl: './team-tab.component.html',
  styleUrls: ['./team-tab.component.css']
})
export class TeamTabComponent {
	@Input() teamMembers!: ITeamMember[];

	constructor() {
		console.log(this.teamMembers);
	}
}
