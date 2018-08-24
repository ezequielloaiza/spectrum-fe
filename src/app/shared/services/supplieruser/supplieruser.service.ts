import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplieruserService {

  constructor(private http: HttpClient) { }

  public findIdUser$(idUser): Observable<any> {
    return this.http.get(environment.apiUrl + 'supplierUser/findIdUser/' + idUser);
  }
}
