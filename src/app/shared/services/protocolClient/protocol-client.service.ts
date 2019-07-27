import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Protocol } from '../../models/protocol';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProtocolClientService {

  constructor(private http: HttpClient) { }

  public allByUser$(clientId: any): Observable<any> {
    return this.http.get(environment.apiUrl  + 'protocol/allByUser/' + clientId);
  }

  public findByClienSupplier$(clientId: any, supplierId: any): Observable<Protocol> {
    return this.http.get<Protocol>(environment.apiUrl + 'protocol/findByClientSupplier/' + clientId + '/' + supplierId)
    .pipe(map(response => new Protocol(response)));
  }

  public update$(protocol): Observable<any> {
    return this.http.put(environment.apiUrl + 'protocol/update', protocol);
  }

  public updateManageAll$(protocol, idUser): Observable<any> {
    return this.http.put(environment.apiUrl + 'protocol/updateManageAll/' + idUser , protocol);
  }

  public reportProtocolById$(protocolId, roleId): Observable<any> {
    return this.http.get(environment.apiUrl + 'protocol/reportProtocolById/' + protocolId + '/' + roleId, {
      responseType: 'blob'
    });
  }

  public remove$(idCliente): Observable<any> {
    return this.http.delete(environment.apiUrl + 'protocol/remove/' + idCliente);
  }
}
