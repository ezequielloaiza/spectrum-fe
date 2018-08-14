import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  public allBasketByUser$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'basket/allBasketByUser');
  }
}
