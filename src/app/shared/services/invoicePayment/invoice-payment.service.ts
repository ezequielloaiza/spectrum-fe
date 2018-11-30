import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoicePaymentService {

  constructor(private http: HttpClient) { }

  public saveInvoicePayment$(invoicePayment): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesPayment/save', invoicePayment);
  }

  public allPaymentsByInvoice$(invoice): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesPayment/allPaymentsByInvoice/' + invoice);
  }

  public changeStatus$(idPayment, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesPayment/changeStatus/' + idPayment + '/' + IdStatus);
  }
}
