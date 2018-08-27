import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  public save$(supplier): Observable<any> {
    return this.http.post(environment.apiUrl + 'suppliers/save', supplier);
  }

  public update$(supplier): Observable<any> {
    return this.http.put(environment.apiUrl + 'suppliers/update', supplier);
  }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'suppliers/findAll');
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'suppliers/removeById/' + id);
  }

  public findByUser$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'suppliers/findByUser/' + id);
  }

  public saveSupplierUser$(supplier): Observable<any> {
    return this.http.post(environment.apiUrl + 'suppliers/saveSupplierUser', supplier);
  }

  public removeSupplierUser$(supplier): Observable<any> {
    return this.http.post(environment.apiUrl + 'suppliers/removeSupplierUser', supplier);
  }
}
