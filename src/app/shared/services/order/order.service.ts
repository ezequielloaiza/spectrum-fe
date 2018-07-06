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


  public findId$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findId/' + id);
  }

  public findOrdersClientBySeller$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findOrdersClientBySeller');
  }
}
