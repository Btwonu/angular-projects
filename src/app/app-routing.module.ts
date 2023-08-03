import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/projects',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		pathMatch: 'full',
		component: DashboardComponent,
	},
	{
		path: 'projects',
		loadChildren: () =>
			import('./project/project.module').then((m) => m.ProjectModule),
	},
	{
		path: 'instances',
		loadChildren: () =>
			import('./instance/instance.module').then((m) => m.InstanceModule),
	},
	{
		path: 'products',
		loadChildren: () =>
			import('./product/product.module').then((m) => m.ProductModule),
	},
	{
		path: 'users',
		title: 'Users',
		loadChildren: () =>
			import('./user/user.module').then((m) => m.UserModule),
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
