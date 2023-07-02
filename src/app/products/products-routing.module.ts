import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './feature/product-details/product-details/product-details.component';
import { ProductListComponent } from './feature/product-list/product-list.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ProductListComponent,
	},
	{
		path: ':id',
		component: ProductDetailsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
