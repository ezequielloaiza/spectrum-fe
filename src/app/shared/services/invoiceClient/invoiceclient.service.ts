import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceClientService {

  constructor(private http: HttpClient) { }

  public allInvoiceByOrder$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/allInvoiceByOrder/' + id);
  }

  public findInvoice$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/findInvoiceById/' + id);
  }

  public allInvoiceByStatus$(status): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/allInvoiceByStatus/' + status);
  }

  public allInvoiceByStatusIn$(idUser, status): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/allInvoiceByStatusInByRole/' + idUser + '/' + status);
  }

  public allInvoice$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/allInvoice');
  }

  public delete$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'invoicesClient/delete/' + id);
  }

  public downloadInvoice$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/downloadInvoice/' + name, {
      responseType: 'blob'
    });
  }
}