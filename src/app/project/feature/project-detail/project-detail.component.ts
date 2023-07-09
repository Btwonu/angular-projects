import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../service/project.service';
import { tap, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
	project$!: Observable<any>;

	constructor(private projectService: ProjectService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.project$ = this.route.params.pipe(
			tap((params) => console.log(params)),
			switchMap((params) => {
				return this.projectService.getOne(params.id);
			})
		)
	}

	generateInstance() {
		console.log('click');
		
	}
}
