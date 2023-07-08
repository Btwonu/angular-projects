import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';
import projectsData from '../../db/projects.json';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProjectsService {
	getAll(): Project[] {
		const projects = projectsData.map(
			(project: Project) =>
				new Project(
					project.id,
					project.title,
					project.requirements,
					project.tags,
					project.complexity
				)
		);

		return projects;
	}

	getOne(id: string): Observable<Project | undefined >{
		return of(projectsData.find((project: Project) => String(project.id) === id));
	}
}
