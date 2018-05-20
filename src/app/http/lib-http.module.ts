import { CatchInterceptorService } from './catch-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreService } from './store.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchInterceptorService,
      multi: true
    },
    StoreService
  ]
})
export class LibHttpModule { }
