import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Instance } from 'src/app/models/Instance';
import { of, Observable } from 'rxjs';
import instanceData from '../../db/instances.json';

@Injectable({
	providedIn: 'root',
})
export class InstanceService {
	constructor() {}

	store() {
		// Create a new instance, by hitting api endpoint
		// Return the created instance's id
		const randomId: string = faker.string.uuid();

		return JSON.stringify({
			id: randomId,
		});
	}

	getOne(id: string): Observable<Instance | undefined >{
		return of(instanceData.find((instance: Instance) => String(instance.id) === id));
	}
}
