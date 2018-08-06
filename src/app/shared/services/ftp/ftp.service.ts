import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FtpService {

  constructor(private http: HttpClient) { }

  public uploadFile$(ruta): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.http.get(environment.apiUrl + 'ftp/upload', options);
  }
}
