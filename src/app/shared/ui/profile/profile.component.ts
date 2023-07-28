import { Component, Input } from '@angular/core';
import { ITeamMember } from 'src/app/interfaces/team-member.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	@Input() teamMember!: ITeamMember;
}
