import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from './models/Project';
import { User } from './models/User';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'Projects FE';
	projectsData: Project[] = [];
	usersData: User[] = [];

	constructor() {}

	ngOnInit(): void {
		console.log('init AppComponent');
	}

	ngOnDestroy(): void {
		console.log('destroy AppComponent');
	}
}
