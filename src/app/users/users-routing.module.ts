import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './feature/user-list/user-list.component';

const routes: Routes = [
	{
		path: '',
		component: UserListComponent,
		title: 'Users',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UsersRoutingModule {}
