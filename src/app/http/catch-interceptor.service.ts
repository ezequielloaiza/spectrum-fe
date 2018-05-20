import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CatchInterceptorService implements HttpInterceptor {
  private started;

  constructor(private router: Router) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const interceptionOperator = tap<HttpEvent<any>>(
      this.interceptResponse,
      this.catchError
    );
    this.started = Date.now();
    const handledRequest = next.handle(req);
    return handledRequest.pipe(interceptionOperator);
  }

  private interceptResponse = (event: HttpEvent<any>) => {
    if (event instanceof HttpResponse) {
      const elapsed_ms = Date.now() - this.started;
    }
  }

  private catchError = err => {
    if (err instanceof HttpErrorResponse) {
      this.catchHttpError(err);
    } else {
      console.error(err.message);
    }
  }

  private catchHttpError(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.catchUnauthorized();
    } else {
      console.warn(err.statusText);
    }
  }

  private catchUnauthorized() {
    this.navigateToLogin();
  }
  private navigateToLogin() {
    this.router.navigateByUrl('/');
  }
}
