import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsI } from '../interfaces/products.interface';
import { GeneralResponse } from '../../../shared/interfaces/general-responsive.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  
  // urlApi: string = environment.endPoint;

  // constructor(private http: HttpClient) { }

  // getProducts() : Observable<GeneralResponse<ProductsI[]>>{
  //   return this.http.get<GeneralResponse<ProductsI[]>>(`${this.urlApi}products`);
  // }

}
