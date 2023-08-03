import { Component, Input } from '@angular/core';

interface Comment {
	user: {
		name: string;
		avatarUrl: string;
	};
	body: string; 
	likes: number; 
	replies: [];
}

@Component({
  selector: 'app-comment-tab',
  templateUrl: './comment-tab.component.html',
  styleUrls: ['./comment-tab.component.scss']
})
export class CommentTabComponent {
	@Input() comments!: Comment[];
}
