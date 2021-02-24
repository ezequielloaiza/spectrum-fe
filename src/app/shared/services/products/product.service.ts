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
  public findById$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/findById/' + id);
  }
  public findBySupplier$(idSupplier): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/findBySupplier/' + idSupplier);
  }

  public findBySupplierInView$(idSupplier, inView): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/findBySupplierInView/' + idSupplier + '/' + inView);
  }

  public findBySupplierAndInViewAndCategory$(idSupplier, inView, category): Observable<any> {
    return this.http.get(environment.apiUrl + 'products/findBySupplierAndInViewAndCategory/' + idSupplier + '/' + inView + '/' + category);
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

  public sendXSB$(idUser, idProduct, obj): Observable<any> {
    return this.http.post(environment.apiUrl + 'products/sendXSB/' + idUser + '/' + idProduct, obj);
  }
}
