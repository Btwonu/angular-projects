import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { ProductDetailsComponent } from './feature/product-details/product-details/product-details.component';

@NgModule({
	declarations: [ProductListComponent, ProductDetailsComponent],
	imports: [CommonModule, ProductsRoutingModule],
	exports: [],
})
export class ProductsModule {}
