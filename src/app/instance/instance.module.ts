import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceRoutingModule } from './instance-routing.module';
import { InstanceListComponent } from './feature/instance-list/instance-list.component';
import { InstanceDetailComponent } from './feature/instance-detail/instance-detail.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DetailTabComponent } from './ui/detail-tab/detail-tab.component';
import { TeamTabComponent } from './ui/team-tab/team-tab.component';
import { RepoTabComponent } from './ui/repo-tab/repo-tab.component';
import { CommentTabComponent } from './ui/comment-tab/comment-tab.component';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { InstanceItemComponent } from './ui/instance-item/instance-item.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserDialogComponent } from './ui/user-dialog/user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
	declarations: [
		InstanceListComponent,
		InstanceDetailComponent,
		DetailTabComponent,
		TeamTabComponent,
		RepoTabComponent,
		CommentTabComponent,
		InstanceItemComponent,
		UserDialogComponent,
	],
	imports: [
		CommonModule,
		InstanceRoutingModule,
		MatButtonModule,
		MatIconModule,
		MatTabsModule,
		SharedModule,
		SwiperModule,
		MatCardModule,
		MatDividerModule,
		MatProgressBarModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		MatCheckboxModule,
	],
})
export class InstanceModule {}
