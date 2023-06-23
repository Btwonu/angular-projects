import {
	Component,
	Input,
	Output,
	OnInit,
	OnChanges,
	SimpleChanges,
	EventEmitter,
} from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
	@Input() users: User[] = [];
	@Input() customValue: string = 'Test';
	@Output() newUserEvent = new EventEmitter<User>();

	constructor(private userService: UserService) {}

	ngOnChanges(changes: SimpleChanges) {
		for (const propName in changes) {
			const chng = changes[propName];
			const cur = JSON.stringify(chng.currentValue);
			const prev = JSON.stringify(chng.previousValue);

			let output = `${propName}: currentValue = ${cur}, previousValue = ${prev}`;

			console.log({ output });
		}
	}

	ngOnInit(): void {
		console.log('init UserListComponent');
	}

	generateUser() {
		const newUser: User = this.userService.getNewUser();
		this.newUserEvent.emit(newUser);
	}
}
