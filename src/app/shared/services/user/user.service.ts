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

  public recoveryPassword$(user): Observable<any> {
    return this.http.post(environment.apiUrl + 'user/recovery_password', user);
  }

  public allUserBySeller$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/allUserBySeller');
  }

  public changeStatus$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'user/changeStatus/' + id);
  }

  public updateProfile$(user): Observable<any> {
    return this.http.put(environment.apiUrl + 'user/updateProfile', user);
  }

}
