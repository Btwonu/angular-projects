import { ActivatedRoute } from '@angular/router'
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../models/Project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
	@Input() project!: Project;
	@Output() buildEvent = new EventEmitter<string>();

	public id$!: Observable<string>;
	id: string = '';

	constructor(route: ActivatedRoute) {
		console.log(route);

		route.params.subscribe(params => {
			this.id = params.id;
		});
	}

	clickHandler(id: string) {
		this.buildEvent.emit(id);
	}
}
