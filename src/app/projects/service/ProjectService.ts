import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';
import projectsData from '../../db/projects.json';


@Injectable()
export class ProjectService {
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

	getOne(id: string): Project | undefined {
		return projectsData.find((project: Project) => String(project.id) === id);
	}
}
