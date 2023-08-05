import { IInstance, TeamMember, Comment } from "../interfaces/instance.interface";

export class Instance implements IInstance {
	constructor(
		public id: string,
		public title: string,
		public repo: string,
		public team: TeamMember[],
		public comments: Comment[],
	) {}
}