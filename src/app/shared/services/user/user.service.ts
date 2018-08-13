import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public signIn$(user): Observable<any> {
    debugger
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
    return this.http.get(environment.apiUrl + 'user/allCustomersBySellerWithOrders');
  }

  public allCustomersBySellerWithOrders$(idSeller): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allCustomersBySellerWithOrders/' + idSeller);
  }

}
