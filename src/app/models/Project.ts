import { IProject } from "../interfaces/project.interface";

export class Project implements IProject {
	constructor(
		public id: number,
		public title: string,
		public requirements: string[],
		public tags: string[],
		public complexity: string,
	) {}
}