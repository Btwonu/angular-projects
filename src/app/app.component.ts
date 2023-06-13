import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from './services/ArticleService';
import { Project } from './models/Project';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'projects-fe';
	projectsData: Project[] = [];

	constructor(private articleService: ArticleService) {
		console.log('constructor');
	}

	ngOnInit(): void {
		console.log('init');
		this.projectsData = this.articleService.getArticles();
	}

	ngOnDestroy(): void {
		console.log('destroy');
	}
}
