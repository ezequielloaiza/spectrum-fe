import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public signIn$(user): Observable<any> {
    return this.http.post(environment.apiUrl + 'sign_in', user);
  }

  public signUp$(user): Observable<any> {
    return this.http.post(environment.apiUrl + 'user/signUp', user);
  }

  public recoveryPassword$(user): Observable<any> {
    return this.http.post(environment.apiUrl + 'user/recovery_password', user);
  }

  public allUserBySeller$(filter?): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allUserBySeller');
  }

  public changeStatus$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/changeStatus/' + id);
  }

  public changeStatusUser$(id, status): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/changeStatusUser/' + id + '/' + status);
  }

  public findById$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/findById/' + id);
  }

  public findByRole$(roleId, filter): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/findByRole/' + roleId + '?filter=' + filter);
  }

  public registerSeller$(seller): Observable<any> {
    return this.http.post(environment.apiUrl + 'user/registerSeller', seller);
  }

  public updateSeller$(seller): Observable<any> {
    return this.http.put(environment.apiUrl + 'user/updateSeller', seller);
  }

  public removeSeller$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'user/removeSeller/' + id);
  }

  public allCustomersBySeller$(idSeller): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allCustomersBySeller/' + idSeller);
  }

  public transferClient$(idCliente, idSeller): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/transferClient/'+idCliente+'/'+idSeller);
  }

  public updateProfile$(user): Observable<any> {
    return this.http.put(environment.apiUrl + 'user/updateProfile', user);
  }

  public changePassword$(user): Observable<any> {
    return this.http.put(environment.apiUrl + 'user/changePassword', user);
  }

  public update$(user): Observable<any> {
    return this.http.put(environment.apiUrl + 'user/update', user);
  }

  public findByIdFull$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/findByIdFull/' + id);
  }

  public findByRoleActive$(roleId): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/findByRoleActive/' + roleId);
  }

  public allCustomersWithOrders$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allCustomersWithOrders');
  }

  public allCustomersBySellerWithOrders$(idSeller): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allCustomersBySellerWithOrders/' + idSeller);
  }

  public allCustomersAvailableBuy$(idSupplier): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allCustomersAvailableBuy/' + idSupplier);
  }

  public uploaderAvatar$(file: File): Observable<HttpEvent<{}>> {
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

  public reportByRole$(roleId): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/reportByRole/' + roleId, {
      responseType: 'blob'
    });
  }

  public sendPassword$(listUserId): Observable<any> {
    return this.http.post(environment.apiUrl + 'user/send-password', listUserId);
  }

}
