import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsI } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlApi: string = environment.endPoint;

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProductsI[]>{
    return this.http.get<ProductsI[]>(`${this.urlApi}products`);
  }

  getProductById(id: string) : Observable<ProductsI>{
    return this.http.get<ProductsI>(`${this.urlApi}products/${id}`);
  }
  
}
