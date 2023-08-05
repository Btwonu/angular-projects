import { Component } from '@angular/core';
import { InstanceService } from '../../service/instance.service';
import { IInstance } from '../../../interfaces/instance.interface';
import { equalizeHeight } from 'src/app/shared/utils/functions';

window.addEventListener('load', (e) => equalizeHeight('.instances'));
window.addEventListener('resize', (e) => equalizeHeight('.instances'));

@Component({
	selector: 'app-instance-list',
	templateUrl: './instance-list.component.html',
	styleUrls: ['./instance-list.component.scss'],
})
export class InstanceListComponent {
	instances: IInstance[] = [];

	constructor(private instanceService: InstanceService) {
		this.instances = this.instanceService.getAll();
	}
}
