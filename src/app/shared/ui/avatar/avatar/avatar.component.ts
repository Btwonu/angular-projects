import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
	@Input() imgSrc: string = '';
	@Input() imgAlt: string = '';
	@Input() size: string = '';
}
