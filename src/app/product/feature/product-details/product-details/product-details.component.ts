import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/service/product.service';
import { ActivatedRoute } from '@angular/router'
import { tap, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	product$!: Observable<any>;
	
	constructor(private productService: ProductService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.product$ = this.route.params.pipe(
			tap((params) => console.log(params)),
			switchMap((params) => {
				return this.productService.getOne(params.id);
			})
		)
	}
}
