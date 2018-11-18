import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/findAll');
  }

  public update$(product): Observable<any> {
    return this.http.put(environment.apiUrl + 'products/update', product);
  }


  public findBySupplier$(idSupplier): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/findBySupplier/' + idSupplier);
  }
}
