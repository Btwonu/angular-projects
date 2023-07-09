import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { tap, switchMap, Observable } from 'rxjs';
import { InstanceService } from 'src/app/instance/service/instance.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
	project$!: Observable<any>;

	constructor(private router: Router, private projectService: ProjectService, private route: ActivatedRoute, private instanceService: InstanceService) {}

	ngOnInit(): void {
		console.log(this.route.params);
		
		this.project$ = this.route.params.pipe(
			tap((params) => console.log(params)),
			switchMap((params) => {
				return this.projectService.getOne(params.id);
			})
		)
	}

	generateInstance() {
		// TODO
		// Get form data
		// Send data to service
		const { id } = JSON.parse(this.instanceService.store());

		this.router.navigate(['instances', id], );
	}
}
