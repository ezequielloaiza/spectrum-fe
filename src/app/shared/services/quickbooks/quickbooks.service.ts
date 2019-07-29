import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuickbooksService {

  constructor(private http: HttpClient) { }

  public connectToQuickbooks$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'connectToQuickbooks');
  }

  public revokeToken$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'revokeToken');
  }
}
