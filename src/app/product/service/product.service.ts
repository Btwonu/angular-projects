import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	PRODUCTS_URL: string = 'https://dummyjson.com/products';

	constructor(private http: HttpClient) {
		
	}

	getAll() {
		return this.http.get<any>(this.PRODUCTS_URL);
	}

	getOne(id: number) {
		return this.http.get<any>(`${this.PRODUCTS_URL}/${id}`);
	}
}
