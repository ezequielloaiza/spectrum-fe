import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  public allBasketByUser$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'basket/allBasketByUser/' + idUser);
  }

  public findBasketClientBySeller$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'basket/findBasketClientBySeller');
  }

  public allBasket$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'basket/allBasket');
  }

  public saveBasket$(Basket): Observable<any> {
    return this.http.put(environment.apiUrl + 'basket/saveBasket', Basket);
  }
}
