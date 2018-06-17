import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public findAllByCompany$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'company/findAllBySeller/');
  }

  public findByIdUser$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'company/findByIdUser/' + id);
  }

  public update$(company): Observable<any> {
    return this.http.put(environment.apiUrl + 'company/update', company);
  }


}
