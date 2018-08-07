import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  constructor(private http: HttpClient) { }

  public connectQuickbooks$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'oauth2/connectQuickbooks');
  }

}
