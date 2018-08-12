import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsRequestedService {

  constructor(private http: HttpClient) { }

  public AllProductsRequestedByOrder$(orderId): Observable<any> {
    return this.http.get(environment.apiUrl + 'productsRequested/allProductsRequestedByOrder/' + orderId);
  }
}
