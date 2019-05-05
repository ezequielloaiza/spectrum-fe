import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceSupplierService {

  constructor(private http: HttpClient) { }

  public allInvoiceByOrder$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesSupplier/allInvoiceByOrder/' + id);
  }

  public allInvoiceByStatus$(status): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesSupplier/allInvoiceByStatus/' + status);
  }

  public allInvoice$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesSupplier/allInvoice');
  }

  public delete$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'invoicesSupplier/delete/' + id);
  }

  public downloadInvoice$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesSupplier/downloadInvoice/' + name, {
      responseType: 'blob'
    });
  }

  public findByNumberAndOriginal$(number): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesSupplier/findByNumberAndOriginal/' + number);
  }

  public sendInvoice$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesSupplier/sendInvoice/' + id);
  }
}
