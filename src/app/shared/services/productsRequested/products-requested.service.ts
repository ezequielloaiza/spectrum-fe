import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsRequestedService {

  constructor(private http: HttpClient) { }

  public allProductsRequestedByOrder$(orderId): Observable<any> {
    return this.http.get(environment.apiUrl + 'orderProductsRequested/allProductsRequestedByOrder/' + orderId);
  }


  public update$(productsRequested): Observable<any> {
    return this.http.put(environment.apiUrl + 'productsRequested/update', productsRequested);
  }

  public updateList$(listProductsRequested: Array<any>): Observable<any> {
    return this.http.put(environment.apiUrl + 'productsRequested/updateList', listProductsRequested);
  }

  public findAllProducts$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'orderProductsRequested/findAllProducts');
  }

  public updatePriceEuropa$(productsRequested): Observable<any> {
    return this.http.put(environment.apiUrl + 'productsRequested/updatePriceEuropa', productsRequested);
  }

  public updateOrderGeneral$(orderGeneral): Observable<any> {
    return this.http.put(environment.apiUrl + 'productsRequested/update-order-general', orderGeneral);
  }
}
