import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FileInvoicePayment } from '../../models/fileinvoicepayment';

@Injectable({
  providedIn: 'root'
})
export class FileinvoicepaymentService {

  constructor(private http: HttpClient) { }

  public uploader$(file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const header = new HttpHeaders({'Content-Type': undefined});
    const req = new HttpRequest('POST', environment.apiUrl + 'fileProductRequested/uploader', formData, {
      headers: header,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
  
  public deleteAllFile$(listFiles: Array<String>): Observable<any> {
    return this.http.put(environment.apiUrl + 'fileInvoicePayment/deleteAllFile', listFiles);
  }

  public downloadFile$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'fileInvoicePayment/downloadFile/' + name, {
      responseType: 'blob'
    });
  }

  public deleteFile$(id, file): Observable<any> {
    return this.http.post(environment.apiUrl + 'fileInvoicePayment/deleteFile/' + id, file);
  }

  public saveAllFile$(listFiles: Array<FileInvoicePayment>, id): Observable<any> {
    return this.http.post(environment.apiUrl + 'fileInvoicePayment/saveAllFiles/' + id, listFiles);
  }

  public allFileByInvoicePayment$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'fileInvoicePayment/allFileByInvoicePayment/' + id);
  }
}
