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

  public download$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/download/' + name, {
      responseType: 'blob'
    });
  }

  public getQuote$(idUser, idProduct): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/getQuote/' + idUser + '/' + idProduct);
  }

  public downloadProducts$(idSupplier): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/downloadProduct/' + idSupplier, {
    responseType: 'blob'
    });
  }

  public reportAllOrBySupplier$(idSupplier): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/reportAllOrBySupplier/' + idSupplier, {
      responseType: 'blob'
    });
  }
}
