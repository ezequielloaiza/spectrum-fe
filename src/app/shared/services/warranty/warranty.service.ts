import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarrantyService {

  constructor(private http: HttpClient) { }

  public save$(warranty): Observable<any> {
    return this.http.post(environment.apiUrl + 'warranty/save', warranty);
  }

  public update$(warranty): Observable<any> {
    return this.http.put(environment.apiUrl + 'warranty/update', warranty);
  }

  public findAllByUser$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'warranty/findAllByUser');
  }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'warranty/findAll');
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'warranty/removeById/' + id);
  }
}
