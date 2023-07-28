import { ITeamMember } from "../interfaces/team-member.interface";

export class Project implements ITeamMember {
	constructor(
		public name: string,
		public avatarUrl: string,
		public role: string,
	) {}
}