import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrustingCompanyService {

  constructor(private http: HttpClient) { }

  public save$(entrustingCompany): Observable<any> {
    return this.http.post(environment.apiUrl + 'entrustingCompany/save', entrustingCompany);
  }

  public update$(entrustingCompany): Observable<any> {
    return this.http.put(environment.apiUrl + 'entrustingCompany/update', entrustingCompany);
  }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'entrustingCompany/findAll');
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'entrustingCompany/removeById/' + id);
  }

}
