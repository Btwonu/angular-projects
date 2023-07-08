import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';
import { tap, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
	project$!: Observable<any>;

	constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.project$ = this.route.params.pipe(
			tap((params) => console.log(params)),
			switchMap((params) => {
				return this.projectsService.getOne(params.id);
			})
		)
	}
}
