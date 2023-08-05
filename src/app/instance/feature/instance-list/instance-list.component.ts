import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions } from 'swiper';
import { InstanceService } from '../../service/instance.service';
import { IInstance } from '../../../interfaces/instance.interface';

@Component({
	selector: 'app-instance-list',
	templateUrl: './instance-list.component.html',
	styleUrls: ['./instance-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class InstanceListComponent {
	instances: IInstance[] = [];

	constructor(private instanceService: InstanceService) {
		this.instances = this.instanceService.getAll();
	}

	sliderUsersConfig: SwiperOptions = {
		slidesPerView: 'auto',
		spaceBetween: -5,
	};
}
