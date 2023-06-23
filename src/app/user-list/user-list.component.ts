import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
	@Input() users: User[] = [];
	@Output() newUserEvent = new EventEmitter<User>();

	constructor(private userService: UserService) {}
	
	ngOnInit(): void {
		console.log('init UserListComponent');
	}

	generateUser() {
		const newUser: User = this.userService.getNewUser();
		this.newUserEvent.emit(newUser);
	}
}
