import { Component, Input } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../users/service/UserService';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
	@Input() users: User[] = [];
	@Input() customValue: string = 'Test';

	constructor(private userService: UserService) {
		this.users = this.userService.getUsers();
	}

	generateUser() {
		const newUser: User = this.userService.getNewUser();
		this.users.push(newUser);
	}
}
