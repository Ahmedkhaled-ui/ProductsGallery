import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProduct(id?: string): Observable<any> {
    const productId = id
      ? `https://fakestoreapi.com/products/${id}`
      : 'https://fakestoreapi.com/products';
    return this.httpClient.get(productId);
  }
}
