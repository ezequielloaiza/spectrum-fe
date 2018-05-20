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

  public findAllByCompany$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'address/findAllByCompany/' + id);
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'address/removeById/' + id);
  }

  
}
