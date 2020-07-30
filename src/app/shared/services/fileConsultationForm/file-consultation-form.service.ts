import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileConsultationFormService {

  constructor(private http: HttpClient) { }

  public downloadFile$(name): Observable<any> {
    return this.http.get(environment.apiUrl + 'fileConsultationForm/downloadFile/' + name, {
      responseType: 'blob'
    });
  }

  public allFileByConsultationForm$(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'fileConsultationForm/allFileByConsultationForm/' + id);
  }
}
