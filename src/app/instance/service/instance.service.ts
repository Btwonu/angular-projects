import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Instance } from 'src/app/models/Instance';
import { of, Observable } from 'rxjs';
import instancesData from '../../db/instances.json';

@Injectable({
	providedIn: 'root',
})
export class InstanceService {
	constructor() {}

	getAll(): Instance[] {
		const instances = instancesData.map(
			(instance: Instance) =>
				new Instance(
					instance.id,
					instance.title,
					instance.repo,
					instance.comments,
					instance.team,
				)
		);

		return instances;
	}

	store() {
		// Create a new instance, by hitting api endpoint
		// Return the created instance's id
		const randomId: string = faker.string.uuid();

		return JSON.stringify({
			id: randomId,
		});
	}

	getOne(id: string): Observable<Instance | undefined > {
		return of(instancesData.find((instance: Instance) => String(instance.id) === id));
	}
}
