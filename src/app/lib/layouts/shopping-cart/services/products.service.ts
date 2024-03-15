import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsI } from '../interfaces/products.interface';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlApi: string = environment.endPoint;

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProductsI[]>{
    return this.http.get<ProductsI[]>(`${this.urlApi}products`);
  }

  getProductById(id: number) : Observable<ProductsI>{
    return this.http.get<ProductsI>(`${this.urlApi}products/${id}`);
  }
  
}
