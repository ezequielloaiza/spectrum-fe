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

  public allInvoiceByStatusInByRole$(idUser, status): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/allInvoiceByStatusInByRole/' + idUser+ '/' + status);
  }

  public allInvoiceByStatusIn$(idUser,  status: Array<any>): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesClient/allInvoiceByStatusIn/' + idUser, status);
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

  public generateReportInvoices$(status, idClient): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/downloadReportInvoice/' + status + '/' + idClient, {
      responseType: 'blob'
    });
  }

  public findByIds$(listIds: Array<String>): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesClient/allInvoiceByIds', listIds);
  }


  public usersWithInvoicesOverdue$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/usersWithInvoicesOverdue/' + idUser);
  }

  public usersWithInvoices$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/usersWithInvoices');
  }

  public invoicesOverdue$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/invoicesOverdue');
  }

  public downloadReportBalance$(request): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesClient/downloadReportBalance', request, {
      responseType: 'blob'
    });
  }

  public downloadGeneralBalance$(request): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesClient/downloadGeneralBalance', request, {
      responseType: 'blob'
    });
  }

  public allInvoiceQBO$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/allInvoiceQBO');
  }
}
