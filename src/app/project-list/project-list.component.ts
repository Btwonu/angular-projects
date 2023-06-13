import { Component, Input } from '@angular/core';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
	@Input() projects: IProject[] = [];

	clickEventHandler(id: number) {
		console.log(`Project ${id} is being built.`);
	}
}
