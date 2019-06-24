import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderProductRequestedService {

  constructor(private http: HttpClient) { }

  public allByGroupId$(id, idOrder): Observable<any> {
    return this.http.get(environment.apiUrl + 'orderProductsRequested/allByGroupId/' + id + '/' + idOrder);
  }
}
