import { Component, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeamMember } from 'src/app/interfaces/team-member.interface';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-team-tab',
  templateUrl: './team-tab.component.html',
  styleUrls: ['./team-tab.component.css']
})
export class TeamTabComponent {
	@Input() teamMembers!: ITeamMember[];

	constructor(public dialog: MatDialog) {
		console.log(this.teamMembers);
	}

	openDialog(): void {
		console.log('hi');
		const dialogRef = this.dialog.open(UserDialogComponent);

		dialogRef.afterClosed().subscribe(res => {
			console.log('closed');
			console.log(res);
		});
	}
}
