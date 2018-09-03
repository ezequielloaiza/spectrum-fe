import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {

  constructor(private http: HttpClient) { }

  public save$(shippingAddress): Observable<any> {
    return this.http.post(environment.apiUrl + 'address/save', shippingAddress);
  }

  public update$(shippingAddress): Observable<any> {
    return this.http.put(environment.apiUrl + 'address/update', shippingAddress);
  }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'address/findAll');
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'address/removeById/' + id);
  }

  public defineMain$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'address/defineMain/' + id);
  }

  public findIdUser$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'address/findIdUser/' + idUser);
  }


}
