import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public save$(category): Observable<any> {
    return this.http.post(environment.apiUrl + 'category/save', category);
  }

  public update$(category): Observable<any> {
    return this.http.put(environment.apiUrl + 'category/update', category);
  }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'category/findAll');
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'category/removeById/' + id);
  }
}
