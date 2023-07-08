import { Component, Input } from '@angular/core';
import { Project } from '../../../models/Project';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
	@Input() projects: Project[] = [];

	constructor(private projectsService: ProjectsService) {
		this.projects = this.projectsService.getAll();
	}

	buildEventHandler(id: string) {
		console.log(`Project ${id} is being built.`);
	}
}
