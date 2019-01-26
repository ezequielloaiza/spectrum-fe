import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SageService {

  constructor(private http: HttpClient) { }

  public findAll$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'connectSage');
  }
}
