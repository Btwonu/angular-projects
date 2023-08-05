type User = {
	name: string;
	avatarUrl: string;
};

export type TeamMember = {
	name: string;
	avatarUrl: string;
	role: string;
	githubUrl: string;
};

export type Comment = {
	user: User;
	body: string;
	likes: number;
	replies: Comment[];
};

export interface IInstance {
	id: string;
	title: string;
	repo: string;
	team: TeamMember[];
	comments: Comment[];
}