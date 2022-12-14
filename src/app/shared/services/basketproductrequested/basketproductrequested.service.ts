import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasketproductrequestedService {

  constructor(private http: HttpClient) { }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'basketProductRequested/removeById/' + id);
  }

  public removeByIds$(ids): Observable<any> {
    return this.http.delete(environment.apiUrl + 'basketProductRequested/removeByIds/' + ids);
  }

  public checkProduct$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'basketProductRequested/checkSpectrumSaline/' + id);
  }

  public allBasketByGroupId$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'basketProductRequested/allBasketByGroupId/' + id);
  }
}
