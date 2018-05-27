import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  private token: String = '';

  constructor(private store: UserStorageService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationReq = this.setAuthHeader(req);
    const handledRequest = next.handle(authorizationReq);
    return handledRequest;
  }
  private setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    const authToken = (this.store && this.store.getToke()) ? this.store.getToke() : '';
    const headers = req.headers.set('Authorization', authToken);
    const authorizedReq = req.clone({ headers });
    return authorizedReq;
  }
}
