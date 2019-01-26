import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  constructor(private http: HttpClient) { }

  public save$(shippingAddress): Observable<any> {
    return this.http.post(environment.apiUrl + 'commission/save', shippingAddress);
  }

  public update$(shippingAddress): Observable<any> {
    return this.http.put(environment.apiUrl + 'commission/update', shippingAddress);
  }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'commission/findAll');
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'commission/removeById/' + id);
  }

  public findIdUser$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'commission/findIdUser/' + idUser);
  }

  public changeStatus$(idCommission, IdStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'commission/changeStatus/' + idCommission + '/' + IdStatus);
  }
}
