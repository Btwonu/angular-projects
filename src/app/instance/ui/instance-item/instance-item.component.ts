import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions } from 'swiper';
import { IInstance } from '../../../interfaces/instance.interface';
import { InstanceService } from '../../service/instance.service';

@Component({
  selector: 'app-instance-item',
  templateUrl: './instance-item.component.html',
  styleUrls: ['./instance-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InstanceItemComponent {
	@Input() instance!: IInstance;

	loading: boolean = false;

	constructor(private instanceService: InstanceService) {

	}

	sliderUsersConfig: SwiperOptions = {
		slidesPerView: 'auto',
		spaceBetween: -5,
	};

	likeInstance(id: string) {
		this.loading = true;

		setTimeout(() => {
			this.loading = false;
		}, 1000);

		this.instanceService.like(id);
	}
}
