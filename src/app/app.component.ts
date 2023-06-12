import { Component, OnDestroy, OnInit } from '@angular/core';
import projectsData from './db/projects.json';

console.log(projectsData);

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'projects-fe';
	projectsData = projectsData;

	// Component is instantiating
	constructor() {
		console.log('constructor');
	}

	ngOnInit(): void {
		console.log('init');
	}

	ngOnDestroy(): void {
		console.log('destroy');
	}
}
