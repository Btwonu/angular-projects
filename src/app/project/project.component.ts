import { faker } from '@faker-js/faker';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
	@Input() project!: Project;
	@Output() buildEvent = new EventEmitter<number>();

	clickHandler(id: number) {
		this.buildEvent.emit(id);
	}
}
   