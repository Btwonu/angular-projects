import { IProject } from "../interfaces/project.interface";

export class Project implements IProject {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public requirements: string[],
		public tags: string[],
		public complexity: string,
	) {}
}