import { ActivatedRoute } from '@angular/router'
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Project } from '../../../models/Project';
import { Observable } from 'rxjs';
import { equalizeHeight } from '../../../shared/utils/functions';

window.addEventListener('load', (e) => equalizeHeight('.projects'));
window.addEventListener('resize', (e) => equalizeHeight('.projects'));

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
	@Input() project!: Project;
	@Output() buildEvent = new EventEmitter<string>();

	public id$!: Observable<string>;
	id: string = '';

	constructor(route: ActivatedRoute) {
		route.params.subscribe(params => {
			this.id = params.id;
		});
	}
	
	ngOnInit(): void {
		equalizeHeight('.projects');
	}

	clickHandler(id: string) {
		this.buildEvent.emit(id);
	}

}
