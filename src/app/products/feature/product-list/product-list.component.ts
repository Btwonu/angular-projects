import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	products$: any;
	
	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.products$ = this.productsService.getAll().pipe(map(result => result.products));
	}
}
