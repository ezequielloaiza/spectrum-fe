import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultationFormService {

  constructor(private http: HttpClient) { }


  public allConsultationsFormByUser$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'consultationForm/allConsultationFormByUser');
  }

  public allConsultationsForm$(): Observable<any> {
    return this.http.get(environment.apiUrl + 'consultationForm/allConsultationForm');
  }

  public changeStatus$(id, idStatus): Observable<any> {
    return this.http.get(environment.apiUrl + 'consultationForm/changeStatus/' + id + '/' + idStatus );
  }

  public removeById$(id): Observable<any> {
    return this.http.delete(environment.apiUrl + 'consultationForm/removeById/' + id);
  }

  public save$(consultationRequest): Observable<any> {
    return this.http.put(environment.apiUrl + 'consultationForm/save', consultationRequest);
  }
}
