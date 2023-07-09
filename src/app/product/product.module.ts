import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { ProductDetailsComponent } from './feature/product-details/product-details/product-details.component';

@NgModule({
	declarations: [ProductListComponent, ProductDetailsComponent],
	imports: [CommonModule, ProductRoutingModule],
	exports: [],
})
export class ProductModule {}
