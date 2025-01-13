import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqOptions } from '../../types';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private HttpClient : HttpClient,

  ) { }

  // Get Method
  // <T> : Generic Type Parameter => function can handle any type of data
  // ex : get <string> (url: string , options?: any) : Observable<string>

  get <T> (url: string , options: ReqOptions) : Observable<T>{
    return this.HttpClient.get<T>(url, options) as Observable<T>;
  }

  


}
