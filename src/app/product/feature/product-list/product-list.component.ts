import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	products$: any;
	
	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.products$ = this.productService.getAll().pipe(map(result => result.products));
	}
}
