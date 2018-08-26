import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileProductRequestedService {

  constructor(private http: HttpClient) { }

  public uploader$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'fileProductRequested/uploader/');
  }
}
