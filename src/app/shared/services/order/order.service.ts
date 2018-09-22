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

  public findOrdersClientBySeller$(status): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findOrdersClientBySeller/' + status);
  }

  public allOrder$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrder');
  }

  public allOrderWithStatus$(idStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderWithStatus/' + idStatus);
  }

  public allOrderWithStatusNot$(idStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderWithStatusNot/' + idStatus);
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

  public allOrderByUserIdAndStatus$(idUser, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderByUserIdAndStatus/' + idUser + '/' + IdStatus);
  }

  public downloadOrder$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/downloadOrder/' + name, {
      responseType: 'blob'
    });
  }
}
