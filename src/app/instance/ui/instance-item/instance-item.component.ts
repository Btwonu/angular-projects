import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions } from 'swiper';
import { IInstance } from '../../../interfaces/instance.interface';

@Component({
  selector: 'app-instance-item',
  templateUrl: './instance-item.component.html',
  styleUrls: ['./instance-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InstanceItemComponent {
	@Input() instance!: IInstance;

	sliderUsersConfig: SwiperOptions = {
		slidesPerView: 'auto',
		spaceBetween: -5,
	};
}
