import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/Project';
import projectsData from '../../db/projects.json';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProjectService {
	PROJECTS_URL: string = 'http://127.0.0.1:8000/api/projects';
	
	constructor(private http: HttpClient) {}

	getAll(): Project[] {
		const projects = projectsData.map(
			(project: Project) =>
				new Project(
					project.id,
					project.title,
					project.description,
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

	getProjectsTest() {
		return this.http.get<any>(this.PROJECTS_URL);
	}
}
