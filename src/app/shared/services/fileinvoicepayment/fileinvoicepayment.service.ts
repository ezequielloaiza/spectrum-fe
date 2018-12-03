import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FileInvoicePayment } from '../../models/fileinvoicepayment';

@Injectable({
  providedIn: 'root'
})
export class FileinvoicepaymentService {

  constructor(private http: HttpClient) { }

  public deleteAllFile$(listFiles: Array<String>): Observable<any> {
    return this.http.put(environment.apiUrl + 'fileInvoicePayment/deleteAllFile', listFiles);
  }

  public downloadFile$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'fileInvoicePayment/downloadFile/' + name, {
      responseType: 'blob'
    });
  }

  public saveAllFile$(listFiles: Array<FileInvoicePayment>, id): Observable<any> {
    return this.http.post(environment.apiUrl + 'fileInvoicePayment/saveAllFiles/' + id, listFiles);
  }

  public allFileByInvoicePayment$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'fileInvoicePayment/allFileByInvoicePayment/' + id);
  }
}
