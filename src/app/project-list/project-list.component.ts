import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../services/ProjectService';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
	@Input() projects: Project[] = [];

	constructor(private projectService: ProjectService) {
		this.projects = this.projectService.getAll();
	}

	buildEventHandler(id: string) {
		console.log(`Project ${id} is being built.`);
	}
}
