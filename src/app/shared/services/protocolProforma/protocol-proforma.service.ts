import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProtocolProforma } from '../../models/protocolProforma';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProtocolProformaService {

  constructor(private http: HttpClient) { }

  public findByClienSupplier$(clientId: any, supplierId: any): Observable<ProtocolProforma> {
    return this.http.get<ProtocolProforma>(environment.apiUrl + 'protocolProforma/findByClientSupplier/' + clientId + '/' + supplierId)
    .pipe(map(response => new ProtocolProforma(response)));
  }

  public update$(protocol): Observable<any> {
    return this.http.put(environment.apiUrl + 'protocolProforma/update', protocol);
  }

  public reportProtocolById$(protocolId, roleId): Observable<any> {
    return this.http.get(environment.apiUrl + 'protocolProforma/reportProtocolById/' + protocolId + '/' + roleId, {
      responseType: 'blob'
    });
  }
}
