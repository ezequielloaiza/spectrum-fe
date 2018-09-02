import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { List } from 'lodash';


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

    // const formData: FormData = new FormData();
    // formData.append('files', file);
    // formData.append('basket', basket);
    // const header = new HttpHeaders({'Content-Type': undefined});
    // const req = new HttpRequest('PUT', environment.apiUrl + 'basket/saveBasket', formData, {
    //  headers: header,
    //  reportProgress: true,
    //  responseType: 'text'
    // });
    // return this.http.request(req);
  }
}
