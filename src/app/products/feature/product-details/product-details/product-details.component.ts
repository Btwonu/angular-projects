import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/service/products.service';
import { ActivatedRoute } from '@angular/router'
import { tap, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	product$!: Observable<any>;
	
	constructor(private productsService: ProductsService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.product$ = this.route.params.pipe(
			tap((params) => console.log(params)),
			switchMap((params) => {
				return this.productsService.getOne(params.id);
			})
		)
	}
}
