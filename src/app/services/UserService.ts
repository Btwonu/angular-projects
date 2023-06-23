import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { User } from '../models/User';

faker.seed(1);

@Injectable()
export class UserService {
	getUsers() {
		const users: User[] = [];

		for (let i = 0; i < 3; i++) {
			users.push(this.getNewUser());
		}

		return users;
	}

	getNewUser() {
		const randomId: string = faker.string.uuid();
		const randomName: string = faker.person.fullName();
		const randomEmail: string = faker.internet.email();

		return new User(randomId, randomName, randomEmail);
	}
}
