import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDetailComponent } from './feature/project-detail/project-detail.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProjectListComponent } from './feature/project-list/project-list.component';
import { ProjectComponent } from './ui/project/project.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
	declarations: [
		ProjectDetailComponent,
		ProjectListComponent,
		ProjectComponent,
	],
	imports: [
		CommonModule,
		ProjectsRoutingModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatChipsModule,
	],
})
export class ProjectsModule {}
