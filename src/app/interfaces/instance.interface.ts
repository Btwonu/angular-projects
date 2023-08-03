type TeamMember = {
	name: string;
	avatarUrl: string;
	role: string;
	githubUrl: string;
};

export interface IInstance {
	id: string;
	title: string;
	repo: string;
	team: TeamMember[];
	comments: Object[];
}
