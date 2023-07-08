import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './feature/project-list/project-list.component';
import { ProjectDetailComponent } from './feature/project-detail/project-detail.component';

const routes: Routes = [
	{
		path: '',
		title: 'Projects',
		component: ProjectListComponent,
		pathMatch: 'full',
	},
	{
		path: ':id',
		component: ProjectDetailComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProjectsRoutingModule {}
