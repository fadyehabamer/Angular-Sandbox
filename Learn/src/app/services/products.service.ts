import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getExternalProducts() {
    return this.apiService.get('https://fakestoreapi.com/products', {
      observe: 'body',
      responseType: 'json',
    });
  }

  getInternalProducts(
    url: string,
    params: PaginationParams
  ): Observable<Products> {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
}
