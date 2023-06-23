import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
	@Input() projects: Project[] = [];

	clickEventHandler(id: number) {
		console.log(`Project ${id} is being built.`);
	}
}
