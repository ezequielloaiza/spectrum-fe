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

  public updateInvoicePayment$(invoicePayment): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesPayment/update', invoicePayment);
  }

  public deleteInvoicePayment$(invoicePayment): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesPayment/deleteByPayment', invoicePayment);
  }

  public deleteInvoicePaymentByInvoiceClient$(invoicePayment, invoiceClient): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesPayment/deleteByInvoice/' + invoicePayment + '/' + invoiceClient);
  }

  public allPaymentsByInvoice$(invoice): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesPayment/allPaymentsByInvoice/' + invoice);
  }

  public changeStatus$(idPayment, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesPayment/changeStatus/' + idPayment + '/' + IdStatus);
  }
}
