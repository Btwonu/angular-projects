import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from './services/ArticleService';
import { UserService } from './services/UserService';
import { Project } from './models/Project';
import { User } from './models/User';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'projects-fe';
	projectsData: Project[] = [];
	usersData: User[] = [];

	constructor(
		private articleService: ArticleService,
		private userService: UserService,
	) {}

	ngOnInit(): void {
		console.log('init AppComponent');
		this.projectsData = this.articleService.getArticles();
		this.usersData = this.userService.getUsers();
	}

	ngOnDestroy(): void {
		console.log('destroy AppComponent');
	}

	addUser(user: User) {
		this.usersData.push(user);
		console.log('Addded new user successfully');
	}
}
