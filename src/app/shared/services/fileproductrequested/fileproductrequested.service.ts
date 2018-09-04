import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileProductRequestedService {

  constructor(private http: HttpClient) { }

  public uploader$(file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const header = new HttpHeaders({'Content-Type': undefined});
    const req = new HttpRequest('POST', environment.apiUrl + 'fileProductRequested/uploader', formData, {
      headers: header,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  public deleteAllFile$(listFiles: Array<String>): Observable<any> {
    return this.http.put(environment.apiUrl + 'fileProductRequested/deleteAllFile', listFiles);
  }

  public downloadFile$(url): Observable<any> {
    return this.http.get(environment.apiUrl + 'fileProductRequested/downloadFile/' + url);
  }
}
