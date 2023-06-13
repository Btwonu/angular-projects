import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
	@Input() project!: Project;
	@Output() clickEvent = new EventEmitter<number>();

	clickHandler(id: number) {
		this.clickEvent.emit(id);
	}
}
   