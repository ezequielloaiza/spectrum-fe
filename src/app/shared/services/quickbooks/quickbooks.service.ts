import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuickbooksService {

  constructor(private http: HttpClient) { }

  public connectQuickbooks$(): Observable<any> {
    debugger
    return this.http.get(environment.apiUrl + 'connectQuickbooks');
  }

}
