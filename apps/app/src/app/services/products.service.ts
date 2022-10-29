import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductsModel } from '../models/products.model';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductsModel[]> {
    return this._httpClient.get<ProductsModel[]>('https://fakestoreapi.com/products');
  }

  delete(id:string): Observable<void> {
    return this._httpClient.delete('' +id).pipe(map(_=> void 0));
  }

  getOne(id:string):Observable<ProductsModel>{
    return this._httpClient.get<ProductsModel>('https://fakestoreapi.com/products/' + id)
  }
}
