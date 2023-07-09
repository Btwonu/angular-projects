import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstanceListComponent } from './feature/instance-list/instance-list.component';
import { InstanceDetailComponent } from './feature/instance-detail/instance-detail.component';

const routes: Routes = [
	{
		path: '',
		title: 'Instances',
		component: InstanceListComponent,
		pathMatch: 'full',
	},
	{
		path: ':id',
		component: InstanceDetailComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class InstanceRoutingModule {}
