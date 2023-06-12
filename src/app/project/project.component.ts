import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
	@Input() project!: IProject;
	@Output() clickEvent = new EventEmitter<string>();

	clickHandler(value: string) {
		this.clickEvent.emit(value);
	}
}
   