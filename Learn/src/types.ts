import { HttpHeaders, HttpParams, HttpContext } from '@angular/common/http';

// Interfaces for the data we are going to use in our app

export interface ReqOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface Products {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
} 

export interface PaginationParams {
  [key: string]: string | number | boolean;
  page: number;
  perPage: number;
}
