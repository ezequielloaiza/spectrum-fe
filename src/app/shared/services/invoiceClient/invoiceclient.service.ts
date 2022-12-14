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

  public allInvoiceByStatusIn$(idUser,  status: Array<any>, params: any, filter: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesClient/allInvoiceByStatusIn/' + idUser + '?page=' +
     params.page + '&perPage=' + params.perPage  +
     '&statusParam=' + filter.status + '&general=' + filter.general + '&dueDate=' + filter.dueDate +
     '&beginningDate=' + filter.beginningDate + '&finishDate=' + filter.finishDate, status);
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

  public findByIds$(listIds: Array<String>): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesClient/allInvoiceByIds', listIds);
  }

  public generateReportInvoices$(status, idClient): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/downloadReportInvoice/' + status + '/' + idClient, {
      responseType: 'blob'
    });
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

  public allInvoiceQBO$(params: any, filter: any): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/allInvoiceQBO?page=' + params.page + '&perPage=' + params.perPage
    + '&rangeDate=' + filter.rangeDate + '&general=' + filter.general + '&dueDate=' + filter.dueDate +
    '&beginningDate=' + filter.beginningDate + '&finishDate=' + filter.finishDate);
  }

  public downloadInvoiceQBO$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'invoicesClient/downloadInvoiceQBO/' + id, {
      responseType: 'blob'
    });
  }

  public sentToEmailInvoiceQBO$(id): Observable<any> {
    return this.http.post(environment.apiUrl + 'invoicesClient/sentToEmail/' + id, {});
  }
}
