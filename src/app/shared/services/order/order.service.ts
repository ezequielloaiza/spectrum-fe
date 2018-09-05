import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public allOrderByUser$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderByUser');
  }

  public allOrderByGivenId$(clientId): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderByGivenId/' + clientId);
  }

  public allOrderWarrantyByUserIdAndStatus$(userId, status): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderWarrantyByUserIdAndStatus/' + userId + '/' + status);
  }

  public findId$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findId/' + id);
  }

  public findOrdersClientBySeller$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findOrdersClientBySeller');
  }

  public allOrder$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrder');
  }

  public changeStatus$(idOrder, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/changeStatus/' + idOrder + '/' + IdStatus);
  }

  public generateOrder$(idOrder): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/generateOrder/' + idOrder);
  }

  public saveOrder$(buy): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/saveOrder', buy);
  }

  public saveOrderDirect$(buyNow): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/saveOrderDirect', buyNow);
  }
}
