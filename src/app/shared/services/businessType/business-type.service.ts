import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessTypeService {

  constructor(private http: HttpClient) { }

  public save$(businesstype): Observable<any> {
    return this.http.post(environment.apiUrl + 'businessType/save', businesstype);
  }

  public update$(businesstype): Observable<any> {
    return this.http.put(environment.apiUrl + 'businessType/update', businesstype);
  }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'businessType/findAll');
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'businessType/removeById/' + id);
  }
}
