import { Component, Input } from '@angular/core';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
	@Input() projects: IProject[] = [];

	clickEventHandler(value: string) {
		console.log(`${value} is in project list`);
		alert('here');
	}
}
