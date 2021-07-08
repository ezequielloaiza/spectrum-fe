import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public allOrderByUser$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderByUser');
  }

  public allOrderByGivenId$(clientId): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderByGivenId/' + clientId);
  }

  public allOrderWarrantyByUserIdAndStatus$(userId, status): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderWarrantyByUserIdAndStatus/' + userId + '/' + status);
  }

  public findId$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findId/' + id);
  }

  public findOrdersClientBySeller$(status): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findOrdersClientBySeller/' + status);
  }

  public allOrdersUsersBySellerAndStatusNot$(status): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrdersUsersBySellerAndStatusNot/' + status);
  }

  public allOrdersByUserAndStatusNot$(userId, status): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrdersByUserAndStatusNot/' + userId + '/' + status);
  }

  public allOrder$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrder');
  }

  public allOrderWithStatus$(idStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderWithStatus/' + idStatus);
  }

  public allOrderWithStatusNot$(idStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderWithStatusNot/' + idStatus);
  }

  public changeStatus$(idOrder, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/changeStatus/' + idOrder + '/' + IdStatus);
  }

  public generateOrder$(idOrder): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/generateOrder/' + idOrder);
  }

  public generateOrderGeneral$(idOrder): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/generateOrderGeneral/' + idOrder);
  }

  public saveOrder$(buy): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/saveOrder', buy);
  }

  public saveOrderDirect$(buyNow): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/saveOrderDirect', buyNow);
  }

  public generateInvoice$(idOrder, send, invoice): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/generateInvoice/' + idOrder + '/' + send, invoice);
  }

  public generateInvoiceSupplierAndCopy$(idsOrder: Array<any>, send, invoices: Array<any>): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/generateInvoiceSupplierAndCopy/' + idsOrder + '/' + send, invoices);
  }

  public allOrderByUserIdAndStatus$(idUser, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/allOrderByUserIdAndStatus/' + idUser + '/' + IdStatus);
  }

  public downloadOrder$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/downloadOrder/' + name, {
      responseType: 'blob'
    });
  }

  public downloadMergeOrder$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/downloadMergeOrder/' + name, {
      responseType: 'blob'
    });
  }

  public findOrderProcessedByUser$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findOrderProcessedByUser/' + idUser);
  }

  public countOrdersByMonth$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/countOrdersByMonth/' + idUser);
  }

  public countOrders$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/countOrders/' + idUser);
  }

  public reportByRoleAndStatus$(idUser, idRole, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/reportByRoleAndStatus/' + idUser + '/' + idRole + '/' + IdStatus, {
      responseType: 'blob'
    });
  }

  public generateInvoiceClient$(invoice): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/generateInvoiceClient', invoice);
  }

  public generateInvoiceSupplier$(invoice): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/generateInvoiceSupplier', invoice);
  }

  public findByIds$(listIds: Array<String>): Observable<any> {
    return this.http.post(environment.apiUrl + 'order/allOrderByIds', listIds);
  }

  public findAllCountries$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findAllCountries');
  }

  public reportSalesAllOrByProduct$(request): Observable<any> {
    return this.http.post(environment.apiUrl + 'order/reportSalesAllOrByProduct', request, {
      responseType: 'blob'
    });
  }

  public updateOrder$(order): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/updateOrder', order);
  }

  public saveShippingOrder$(orders: any): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/saveShippingOrder', orders);
  }

  public findOrderGroup$(id, status): Observable<any> {
    return this.http.get(environment.apiUrl + 'order/findOrderGroup/' + id + '?status=' + status);
  }

  public generateCopyOrder$(id, type): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/generateCopyOrder/' + id + '?type=' + type, {});
  }

  public saveOrderGeneral$(buyNow): Observable<any> {
    return this.http.put(environment.apiUrl + 'order/saveOrderGeneral', buyNow);
  }

  public savePreOrder$(preOrder): Observable<any> {
    return this.http.post(environment.apiUrl + 'order/pre-order', preOrder);
  }
}
