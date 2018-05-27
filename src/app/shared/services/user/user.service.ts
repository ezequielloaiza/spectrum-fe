import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public signIn$(user): Observable<any> {
    return this.http.post(environment.apiUrl + 'sign_in', user);
  }

  public signUp$(user): Observable<any> {
    return this.http.post(environment.apiUrl + 'user/signUp', user);
  }

  public allUserBySeller$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allUserBySeller');
  }
}
