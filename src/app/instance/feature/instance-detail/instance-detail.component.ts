import { Component, OnInit } from '@angular/core';
import { InstanceService } from '../../service/instance.service';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-instance-detail',
  templateUrl: './instance-detail.component.html',
  styleUrls: ['./instance-detail.component.scss']
})
export class InstanceDetailComponent implements OnInit {
	instance$!: Observable<any>;

	constructor(private route: ActivatedRoute, private instanceService: InstanceService) {}

	ngOnInit(): void {
		this.instance$ = this.route.params.pipe(
			tap((params) => console.log(params)),
			switchMap((params) => {
				return this.instanceService.getOne(params.id);
			})
		)
	}
}
