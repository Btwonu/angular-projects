import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/projects',
		pathMatch: 'full',
	},
	{
		path: 'projects',
		title: 'Projects',
		component: ProjectListComponent,
	},
	{
		path: 'projects/:id',
		component: ProjectComponent,
	},
	{
		path: 'products',
		loadChildren: () =>
			import('./products/products.module').then((m) => m.ProductsModule),
	},
	{
		path: 'users',
		title: 'Users',
		component: UserListComponent,
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
