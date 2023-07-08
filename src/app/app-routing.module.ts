import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/projects',
		pathMatch: 'full',
	},
	{
		path: 'projects',
		loadChildren: () =>
			import('./projects/projects.module').then((m) => m.ProjectsModule),
	},
	{
		path: 'products',
		loadChildren: () =>
			import('./products/products.module').then((m) => m.ProductsModule),
	},
	{
		path: 'users',
		title: 'Users',
		loadChildren: () =>
			import('./users/users.module').then((m) => m.UsersModule),
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
